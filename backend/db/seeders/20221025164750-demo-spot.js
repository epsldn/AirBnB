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
        address: "45th Street",
        city: "Austin",
        state: "Texas",
        country: "United States",
        lat: 1.54151345,
        lng: -23.31441,
        name: "Cityscape Estate",
        description: "Stretching along the hillside, this scenic villa takes advantage of every inch of Austin’s breathtaking skyline view. Indoor and outdoor lounge areas merge delightfully to create ample social space for entertaining. Spend your morning by the pool, and shoot a round of golf in the afternoon. Then, head downtown for a night of live music and World-class barbeque.",
        price: 3940
      },
      {
        ownerId: 2,
        address: "186 Rainey St",
        city: "Lake Hamilton",
        state: "Arkansas",
        country: "United States",
        lat: 2.54151345,
        lng: -34.31441,
        name: "Unique lake-view shipping container with boat slip, large yard, 2 decks, firepit",
        description: "Every inch of the space is curated to appreciate what is so wonderful about Hot Springs all while being five miles from Oaklawn Racing Casino and six and a half miles from downtown. Enjoy your coffee on the lower deck and margaritas on the upper deck while watching the sun rise and set. Or gather around the firepit under the starry night sky for a memorable storytelling time. A large lawn, which is shared with the other home, leads you to the boat slip with enough space for one boat. The fourth bed is a queen-sized swing on the porch inviting you to wake up or lounge during sunset with water views! \n This brand- new home offers unique architecture from four shipping containers, something you won't find easily anywhere else. Admire beautiful Lake Hamilton views through floor-to-ceiling windows or from the luxury bathtub with a window overlooking the lake. There are two inviting living spaces, which means you all can hang out together or simply divide if you would rather watch an action movie while letting the youngsters enjoy one of the latest movies or series. The kitchen is simply gorgeous, with modern, stainless steel appliances and emerald green tile backsplash. Smart TVs allow you and your friends to stay up to date with your favorite series and the washer/dryer will make laundry a breeze. ",
        price: 296
      },
      {
        ownerId: 2,
        address: "19 Tapo Lane",
        city: "Granbury",
        state: "Texas",
        country: "United States",
        lat: 3.54151345,
        lng: -45.31441,
        name: "Trails edge lake house, boat dock, & best views!!!",
        description: "Make memories to last a lifetime on lake Granbury, as well as having the best view in town. BRING YOUR BOAT!!!! Two story dock that is covered, has 2 boat slips, and plenty room for lake activities. Have a perfect view of the most beautiful sunrises and sunsets!! Centrally located between the Historic Granbury Square, Fossil Rim Wildlife Center and Dinosaur Valley State Park!",
        price: 360
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
        address: "123 Disney Lane",
        city: "San Francisco",
        state: "California",
        country: "United States of America",
        lat: 37.7645358,
        lng: -122.4730327,
        name: "App Academy",
        description: "Place where web developers are created",
        price: 123
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
