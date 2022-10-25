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

    await queryInterface.bulkInsert("SpotImages", [
      {
        spotId: 1,
        url: "www.thisisaspot.com/1"
      },
      {
        spotId: 1,
        url: "www.thisisaspot.com/1"
      },
      {
        spotId: 2,
        url: "www.thisisaspot.com/2"
      },
      {
        spotId: 3,
        url: "www.thisisaspot.com/4"
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

    await queryInterface.bulkDelete("SpotImages", {
      id: [1,2,3,4]
    });
  }
};
