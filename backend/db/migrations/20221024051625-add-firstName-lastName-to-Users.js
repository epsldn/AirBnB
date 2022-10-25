'use strict';

const { sequelize } = require('../models');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */

    try {
      await queryInterface.addColumn("Users", "firstName", {
        type: Sequelize.STRING,
        allowNull: false,
      });

      await queryInterface.addColumn("Users", "lastName", {
        type: Sequelize.STRING,
        allowNull: false,
      });
    } catch (error) {
      console.error(error);
    }
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    try {
      await queryInterface.removeColumn("Users", "firstName");
      await queryInterface.removeColumn("Users", "lastName");
    } catch (error) {
      console.error(error);
    }
  }
};
