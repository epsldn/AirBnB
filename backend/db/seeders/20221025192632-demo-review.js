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
    return await queryInterface.bulkInsert("Reviews", [
      {
        spotId: 1,
        userId: 1,
        review: "This place kinda mid",
        stars: 2
      },
      {
        spotId: 2,
        userId: 2,
        review: "This place kinda nice",
        stars: 3
      },
      {
        spotId: 2,
        userId: 1,
        review: "This place is so much better than the other one",
        stars: 5
      },
      {
        spotId: 1,
        userId: 3,
        review: "This place kinda nice but not great",
        stars: 4
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

    await queryInterface.bulkDelete("Reviews", {
      id: [1, 2, , 4]
    });
  }
};
