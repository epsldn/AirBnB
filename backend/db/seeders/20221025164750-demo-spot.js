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
    return await queryInterface.bulkInsert("Spots", [
      {
        ownerId: 1,
        address: "Some address",
        city: "Some city",
        state: "some state",
        country: "some country",
        lat: 1.54151345,
        lng: -23.31441,
        name: "Some cool name",
        description: "Marketing stuff",
        price: 70000000
      },
      {
        ownerId: 2,
        address: "Some address2",
        city: "Some city2",
        state: "some state2",
        country: "some country2",
        lat: 2.54151345,
        lng: -34.31441,
        name: "Some cool name2",
        description: "Marketing stuff2",
        price: 29045
      },
      {
        ownerId: 2,
        address: "Some address3",
        city: "Some city3",
        state: "some state3",
        country: "some country3",
        lat: 3.54151345,
        lng: -45.31441,
        name: "Some cool name3",
        description: "Marketing stuff3",
        price: 112
      },
      {
        ownerId: 1,
        address: "4Some address",
        city: "4Some city",
        state: "4some state",
        country: "4some country",
        lat: 1.54151345,
        lng: -23.31441,
        name: "Some cool name",
        description: "Marketing stuff",
        price: 70000000
      },
      {
        ownerId: 2,
        address: "5Some address2",
        city: "5Some city2",
        state: "5some state2",
        country: "5some country2",
        lat: 2.54151345,
        lng: -34.31441,
        name: "Some cool name2",
        description: "Marketing stuff2",
        price: 29045
      },
      {
        ownerId: 2,
        address: "6Some address3",
        city: "6Some city3",
        state: "6some state3",
        country: "6some country3",
        lat: 3.54151345,
        lng: -45.31441,
        name: "Some cool name3",
        description: "Marketing stuff3",
        price: 112
      },
      {
        ownerId: 1,
        "address": "123 Disney Lane",
        "city": "San Francisco",
        "state": "California",
        "country": "United States of America",
        "lat": 37.7645358,
        "lng": -122.4730327,
        "name": "App Academy",
        "description": "Place where web developers are created",
        "price": 123
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
    const Op = Sequelize.Op;
    return await queryInterface.bulkDelete("Spots", {
      address: { [Op.in]: ["Some address", "Some address2", "Some address3", "123 Disney Lane"] }
    });
  }
};
