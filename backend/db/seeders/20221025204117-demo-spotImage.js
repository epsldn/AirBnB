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
        url: "https://a0.muscache.com/im/pictures/prohost-api/Hosting-681250879114299891/original/6482b370-cc7a-468b-8793-b642cec133ed.jpeg?im_w=720",
        preview: true
      },
      {
        spotId: 2,
        url: "https://a0.muscache.com/im/pictures/prohost-api/Hosting-681250879114299891/original/3730cdfc-7fe0-4a28-918c-dea7f15b1eac.jpeg?im_w=1200",
        preview: false
      },
      {
        spotId: 2,
        url: "https://a0.muscache.com/im/pictures/prohost-api/Hosting-681250879114299891/original/3d6334a1-3c9b-4abf-ab85-72a9c672514f.jpeg?im_w=720",
        preview: true
      },
      {
        spotId: 2,
        url: "https://a0.muscache.com/im/pictures/prohost-api/Hosting-681250879114299891/original/bc7a7130-8378-4293-86a7-4357d3079714.jpeg?im_w=720",
        preview: false
      },
      {
        spotId: 2,
        url: "https://a0.muscache.com/im/pictures/prohost-api/Hosting-681250879114299891/original/88b80138-46f5-4b79-9c48-b7049913fe32.jpeg?im_w=720",
        preview: true
      },
      {
        spotId: 3,
        url: "https://a0.muscache.com/im/pictures/34bf21d9-49f3-40b8-bfa8-3db222c7e4f3.jpg?im_w=1200",
        preview: true
      },
      {
        spotId: 3,
        url: "https://a0.muscache.com/im/pictures/f4c8dc82-6055-4926-842d-66c5a0738d60.jpg?im_w=720",
        preview: false
      },
      {
        spotId: 3,
        url: "https://a0.muscache.com/im/pictures/c88f1e98-2f52-432f-930e-b9134f384167.jpg?im_w=720",
        preview: false
      },
      {
        spotId: 3,
        url: "https://a0.muscache.com/im/pictures/8ca077cd-d9da-4d09-ae8e-d1dfce7f9a24.jpg?im_w=720",
        preview: false
      },
      {
        spotId: 3,
        url: "https://a0.muscache.com/im/pictures/502caf2b-6fad-459c-ab06-ad999ce31f25.jpg?im_w=720",
        preview: false
      },
      {
        spotId: 4,
        url: "https://a0.muscache.com/im/pictures/2064e668-8985-4a82-a9f9-d2d0aecfc8b1.jpg?im_w=1200",
        preview: true
      },
      {
        spotId: 4,
        url: "https://a0.muscache.com/im/pictures/miso/Hosting-1894813/original/a155c0d8-b957-497f-8d36-ac60b1c47776.jpeg?im_w=720",
        preview: false
      },
      {
        spotId: 4,
        url: "https://a0.muscache.com/im/pictures/miso/Hosting-1894813/original/a971d48f-9d4e-4336-9f53-957f7905e11d.jpeg?im_w=720",
        preview: false
      },
      {
        spotId: 4,
        url: "https://a0.muscache.com/im/pictures/miso/Hosting-1894813/original/ab078af9-9968-4384-be9d-be0292966949.jpeg?im_w=720",
        preview: false
      },
      {
        spotId: 4,
        url: "https://a0.muscache.com/im/pictures/miso/Hosting-1894813/original/7dd94a86-200d-47bd-9110-db758d081ae4.jpeg?im_w=720",
        preview: false
      },
      {
        spotId: 5,
        url: "https://a0.muscache.com/im/pictures/5e05a3c8-91fc-430d-a024-57e7c5937c90.jpg?im_w=1200",
        preview: true
      },
      {
        spotId: 5,
        url: "https://a0.muscache.com/im/pictures/a86c229d-3fe9-4b29-9d30-6986ddb41106.jpg?im_w=720",
        preview: false
      },
      {
        spotId: 5,
        url: "https://a0.muscache.com/im/pictures/a67a622d-de14-438a-942a-dd4e2ca9b957.jpg?im_w=720",
        preview: false
      },
      {
        spotId: 5,
        url: "https://a0.muscache.com/im/pictures/7c9164ab-06c3-432e-ae5b-9dc5acc6d323.jpg?im_w=720",
        preview: false
      },
      {
        spotId: 5,
        url: "https://a0.muscache.com/im/pictures/ae056e79-92ba-447e-820d-64b2f9548f39.jpg?im_w=720",
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
