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

    await queryInterface.bulkInsert("UserFavoriteSpots", [
      {
        userId: 1,
        spotId: 1,
      },
      {
        userId: 2,
        spotId: 2,
      },
      {
        userId: 1,
        spotId: 3,
      },
      {
        userId: 1,
        spotId: 4,
      },
      {
        userId: 2,
        spotId: 4,
      },
      {
        userId: 3,
        spotId: 4,
      },
      {
        userId: 1,
        spotId: 3,
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
      id: [1, 2, 3, 4, 5, 6, 7]
    });
  }
};
