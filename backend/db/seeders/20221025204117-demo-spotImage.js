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
        url: "https://applet3d.com/wp-content/uploads/2021/08/locke-lane-exterior-services-1024x576.jpg",
        preview: true
      },
      {
        spotId: 1,
        url: "https://www.firstbenefits.org/wp-content/uploads/2017/10/placeholder.png",
        preview: false
      },
      {
        spotId: 1,
        url: "https://www.firstbenefits.org/wp-content/uploads/2017/10/placeholder.png",
        preview: false
      },
      {
        spotId: 1,
        url: "https://www.firstbenefits.org/wp-content/uploads/2017/10/placeholder.png",
        preview: false
      },
      {
        spotId: 1,
        url: "https://www.firstbenefits.org/wp-content/uploads/2017/10/placeholder.png",
        preview: false
      },
      {
        spotId: 2,
        url: "https://upload.wikimedia.org/wikipedia/commons/1/1e/Fitzgerald_House_%28Los_Angeles%29.jpg",
        preview: true
      },
      {
        spotId: 2,
        url: "https://www.firstbenefits.org/wp-content/uploads/2017/10/placeholder.png",
        preview: false
      },
      {
        spotId: 2,
        url: "https://www.firstbenefits.org/wp-content/uploads/2017/10/placeholder.png",
        preview: false
      },
      {
        spotId: 2,
        url: "https://www.firstbenefits.org/wp-content/uploads/2017/10/placeholder.png",
        preview: false
      },
      {
        spotId: 2,
        url: "https://www.firstbenefits.org/wp-content/uploads/2017/10/placeholder.png",
        preview: false
      },
      {
        spotId: 3,
        url: "https://images.pexels.com/photos/3637662/pexels-photo-3637662.jpeg",
        preview: true
      },
      {
        spotId: 3,
        url: "https://www.firstbenefits.org/wp-content/uploads/2017/10/placeholder.png",
        preview: false
      },
      {
        spotId: 3,
        url: "https://www.firstbenefits.org/wp-content/uploads/2017/10/placeholder.png",
        preview: false
      },
      {
        spotId: 3,
        url: "https://www.firstbenefits.org/wp-content/uploads/2017/10/placeholder.png",
        preview: false
      },
      {
        spotId: 3,
        url: "https://www.firstbenefits.org/wp-content/uploads/2017/10/placeholder.png",
        preview: false
      },
      {
        spotId: 4,
        url: "https://applet3d.com/wp-content/uploads/2021/08/locke-lane-exterior-services-1024x576.jpg",
        preview: true
      },
      {
        spotId: 4,
        url: "https://www.firstbenefits.org/wp-content/uploads/2017/10/placeholder.png",
        preview: false
      },
      {
        spotId: 4,
        url: "https://www.firstbenefits.org/wp-content/uploads/2017/10/placeholder.png",
        preview: false
      },
      {
        spotId: 4,
        url: "https://www.firstbenefits.org/wp-content/uploads/2017/10/placeholder.png",
        preview: false
      },
      {
        spotId: 4,
        url: "https://www.firstbenefits.org/wp-content/uploads/2017/10/placeholder.png",
        preview: false
      },
      {
        spotId: 5,
        url: "https://upload.wikimedia.org/wikipedia/commons/1/1e/Fitzgerald_House_%28Los_Angeles%29.jpg",
        preview: true
      },
      {
        spotId: 5,
        url: "https://www.firstbenefits.org/wp-content/uploads/2017/10/placeholder.png",
        preview: false
      },
      {
        spotId: 5,
        url: "https://www.firstbenefits.org/wp-content/uploads/2017/10/placeholder.png",
        preview: false
      },
      {
        spotId: 5,
        url: "https://www.firstbenefits.org/wp-content/uploads/2017/10/placeholder.png",
        preview: false
      },
      {
        spotId: 5,
        url: "https://www.firstbenefits.org/wp-content/uploads/2017/10/placeholder.png",
        preview: false
      },
      {
        spotId: 6,
        url: "https://images.pexels.com/photos/3637662/pexels-photo-3637662.jpeg",
        preview: true
      },
      {
        spotId: 6,
        url: "https://www.firstbenefits.org/wp-content/uploads/2017/10/placeholder.png",
        preview: false
      },
      {
        spotId: 6,
        url: "https://www.firstbenefits.org/wp-content/uploads/2017/10/placeholder.png",
        preview: false
      },
      {
        spotId: 6,
        url: "https://www.firstbenefits.org/wp-content/uploads/2017/10/placeholder.png",
        preview: false
      },
      {
        spotId: 6,
        url: "https://www.firstbenefits.org/wp-content/uploads/2017/10/placeholder.png",
        preview: false
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
      id: [1, 2, 3, 4, 5]
    });
  }
};
