'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class UserFavoriteSpot extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  UserFavoriteSpot.init({
    userId: DataTypes.INTEGER,
    spotId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'UserFavoriteSpot',
  });
  return UserFavoriteSpot;
};