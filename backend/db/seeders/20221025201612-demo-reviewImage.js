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

    await queryInterface.bulkInsert("ReviewImages", [
      {
        reviewId: 1,
        url: "www.thisisareview.com/1"
      },
      {
        reviewId: 1,
        url: "www.thisisareview.com/1"
      },
      {
        reviewId: 2,
        url: "www.thisisareview.com/2"
      },
      {
        reviewId: 3,
        url: "www.thisisareview.com/4"
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

    await queryInterface.bulkDelete("ReviewImages", {
      id: [1,2,3,4]
    });
  }
};
