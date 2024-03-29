'use strict';
const {
  Model, Validator
} = require('sequelize');
const bcrypt = require("bcryptjs");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    toSafeObject() {
      const { id, username, email, firstName, lastName, token } = this;
      return { user: { id, username, email, firstName, lastName, token } };
    }

    validatePassword(password) {
      return bcrypt.compareSync(password, this.hashedPassword.toString());
    }

    static async getCurrentUserById(id) {
      return await User.scope("currentUser").findByPk(id);
    }

    static async login({ credential, password }) {
      const { Op } = require("sequelize");
      const user = await User.scope("loginUser").findOne({
        where: {
          [Op.or]: {
            username: credential,
            email: credential
          }
        }
      });
      if (user && user.validatePassword(password)) {
        return await User.scope("currentUser").findByPk(user.id);
      }
    };

    static async signup({ username, email, password, firstName, lastName }) {
      const hashedPassword = bcrypt.hashSync(password);
      const user = await User.create({
        username, email, hashedPassword, firstName, lastName
      });

      return user;
    };

    static associate(models) {
      User.hasMany(models.Spot, {
        foreignKey: "ownerId",
        as: "Owner"
      });

      User.hasMany(models.Review, {
        sourceKey: "id",
        foreignKey: "userId"
      });

      User.hasMany(models.Booking, {
        foreignKey: "userId"
      });

      User.belongsToMany(models.Spot, {
        through: models.UserFavoriteSpot
      });
    }
  }
  User.init({
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: { msg: "User with that username already exists" },
      validate: {
        len: {
          msg: "Username must be between 4 and 30 characters",
          args: [4, 30]
        },
        isNotEmail(value) {
          if (Validator.isEmail(value)) throw new Error("Cannot be an email");
        }
      }
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: { msg: "User with that email already exists" },
      validate: {
        len: [3, 256],
        isEmail: true
      }
    },
    hashedPassword: {
      type: DataTypes.STRING.BINARY,
      allowNull: false,
      validate: {
        len: [60, 60]
      }
    },
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  }, {
    sequelize,
    modelName: 'User',
    defaultScope: {
      attributes: {
        exclude: ["hashedPassword", "updatedAt", "createdAt", "email", "username"]
      }
    },
    scopes: {
      currentUser: {
        attributes: {
          exclude: ["hashedPassword"]
        }
      },
      loginUser: {
        attributes: {}
      },
    }
  });
  return User;
};