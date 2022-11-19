'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Review extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Review.belongsTo(models.User, {
        targetKey: "id",
        foreignKey: "userId"
      });

      Review.belongsTo(models.Spot, {
        foreignKey: "spotId"
      });

      Review.hasMany(models.ReviewImage, {
        foreignKey: "reviewId"
      });
    }
  }
  Review.init({
    spotId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    review: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    stars: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        starCheck(value) {
          if (value < 1 || value > 5) throw new Error("Star Rating must be between 1 and 5");
        }
      }
    }
  }, {
    sequelize,
    modelName: 'Review',
  });
  return Review;
};