'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */

    await queryInterface.bulkInsert("Bookings", [
      {
        spotId: 1,
        userId: 1,
        startDate: Sequelize.literal("CURRENT_TIMESTAMP"),
        endDate: "2023-10-25 11:00",
      },
      {
        spotId: 2,
        userId: 2,
        startDate: Sequelize.literal("CURRENT_TIMESTAMP"),
        endDate: "2023-10-25 11:00",
      },
      {
        spotId: 3,
        userId: 1,
        startDate: Sequelize.literal("CURRENT_TIMESTAMP"),
        endDate: "2023-10-25 11:00",
      },
      {
        spotId: 4,
        userId:1,
        startDate: Sequelize.literal("CURRENT_TIMESTAMP"),
        endDate: "2023-10-25 11:00",
      }
    ]);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */

    await queryInterface.bulkDelete("Bookings", {
      id: [1, 2, 3, 4]
    });
  }
};
