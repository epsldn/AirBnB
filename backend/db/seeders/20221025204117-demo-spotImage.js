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
        url: "https://a0.muscache.com/im/pictures/monet/Luxury-567283342060323268/original/ade5dd1a-cece-4497-a0c5-3e9f91f1a359?im_w=1200",
        preview: true
      },
      {
        spotId: 1,
        url: "https://a0.muscache.com/im/pictures/monet/Luxury-567283342060323268/original/fe1570d3-5fcc-42d1-85fe-b94cc36cc134?im_w=1200",
        preview: false
      },
      {
        spotId: 1,
        url: "https://a0.muscache.com/im/pictures/monet/Luxury-567283342060323268/original/14e69b62-acc6-4b94-9149-951bef26d54d?im_w=720",
        preview: false
      },
      {
        spotId: 1,
        url: "https://a0.muscache.com/im/pictures/monet/Luxury-567283342060323268/original/b7ee4980-7edc-4943-91a4-77a1529fbf3a?im_w=1200",
        preview: false
      },
      {
        spotId: 1,
        url: "https://a0.muscache.com/im/pictures/monet/Luxury-567283342060323268/original/9c4eff42-8807-4aa9-ba26-1fb3c0e334a8?im_w=1200",
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
        url: "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg",
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
      {
        spotId: 7,
        url: "https://live.staticflickr.com/1288/4670429913_6cc643f1d4_b.jpg",
        preview: true
      },
      {
        spotId: 7,
        url: "https://www.firstbenefits.org/wp-content/uploads/2017/10/placeholder.png",
        preview: false
      },
      {
        spotId: 7,
        url: "https://www.firstbenefits.org/wp-content/uploads/2017/10/placeholder.png",
        preview: false
      },
      {
        spotId: 7,
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
