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
        startDate: "2022-11-20",
        endDate: "2022-11-25",
      },
      {
        spotId: 2,
        userId: 2,
        startDate: "2022-12-20",
        endDate: "2022-12-25",
      },
      {
        spotId: 3,
        userId: 1,
        startDate: "2023-10-20",
        endDate: "2023-10-25",
      },
      {
        spotId: 4,
        userId: 1,
        startDate: "2022-11-20",
        endDate: "2022-11-25",
      },
      {
        spotId: 4,
        userId: 2,
        startDate: "2022-11-30",
        endDate: "2022-12-05",
      },
      {
        spotId: 4,
        userId: 3,
        startDate: "2022-12-10",
        endDate: "2022-12-15",
      },
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
      id: [1, 2, 3, 4, 5, 6]
    });
  }
};
