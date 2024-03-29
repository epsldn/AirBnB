'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Spot extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Spot.belongsTo(models.User, {
        foreignKey: "ownerId",
        as: "Owner"
      });

      Spot.hasMany(models.Review, {
        foreignKey: "spotId"
      });

      Spot.hasMany(models.SpotImage, {
        foreignKey: "spotId"
      });

      Spot.hasMany(models.Booking, {
        foreignKey: "spotId"
      });

      Spot.belongsToMany(models.User, {
        through: models.UserFavoriteSpot
      });
    }
  }
  Spot.init({
    ownerId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    address: {
      type: DataTypes.STRING(150),
      allowNull: false
    },
    city: {
      type: DataTypes.STRING(150),
      allowNull: false
    },
    state: {
      type: DataTypes.STRING(150),
      allowNull: false
    },
    country: {
      type: DataTypes.STRING(150),
      allowNull: false
    },
    lat: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0.00
    },
    lng: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0.00
    },
    name: {
      type: DataTypes.STRING(150),
      allowNull: false
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    price: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Spot',
  });
  return Spot;
};