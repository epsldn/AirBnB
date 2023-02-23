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
        url: "https://a0.muscache.com/im/pictures/miso/Hosting-618297070744530980/original/bb23b7d0-3471-446d-99db-b5e19c772dff.jpeg?im_w=1200",
        preview: true
      },
      {
        spotId: 6,
        url: "https://a0.muscache.com/im/pictures/miso/Hosting-618297070744530980/original/a77deca1-0ab3-4f2c-8332-56ef9d16c60a.jpeg?im_w=720",
        preview: false
      },
      {
        spotId: 6,
        url: "https://a0.muscache.com/im/pictures/miso/Hosting-618297070744530980/original/eef28bc7-cd36-4dca-a626-ea5bcccb31d5.jpeg?im_w=720",
        preview: false
      },
      {
        spotId: 6,
        url: "https://a0.muscache.com/im/pictures/miso/Hosting-618297070744530980/original/66e4ede6-9c1d-403c-9b5f-b6223295a0e9.jpeg?im_w=720",
        preview: false
      },
      {
        spotId: 6,
        url: "https://a0.muscache.com/im/pictures/miso/Hosting-618297070744530980/original/8155a795-4757-46e2-b9e3-7eb9333735c8.jpeg?im_w=720",
        preview: false
      },
      {
        spotId: 7,
        url: "https://a0.muscache.com/im/pictures/9539ec1a-1929-44b9-a0de-efbb61627b34.jpg?im_w=1200",
        preview: true
      },
      {
        spotId: 7,
        url: "https://a0.muscache.com/im/pictures/dfe61e99-3452-4bf4-b34a-a8198260efc5.jpg?im_w=720",
        preview: false
      },
      {
        spotId: 7,
        url: "https://a0.muscache.com/im/pictures/b48896c7-e2e2-4442-ad9f-49ad0ec8e175.jpg?im_w=720",
        preview: false
      },
      {
        spotId: 7,
        url: "https://a0.muscache.com/im/pictures/81986104-5f64-4fb8-bdea-98af9dafeb3c.jpg?im_w=720",
        preview: false
      },
      {
        spotId: 7,
        url: "https://a0.muscache.com/im/pictures/30c97867-a3b0-4f39-b54a-616a9b986574.jpg?im_w=720",
        preview: false
      },
      {
        spotId: 8,
        url: "https://a0.muscache.com/im/pictures/miso/Hosting-46419788/original/5fe96e47-bca9-4f00-a1d4-c067bc49165d.jpeg?im_w=1200",
        preview: true
      },
      {
        spotId: 8,
        url: "https://a0.muscache.com/im/pictures/miso/Hosting-46419788/original/51f42a69-b044-4fc9-b45f-8fdb4099c77e.jpeg?im_w=720",
        preview: false
      },
      {
        spotId: 8,
        url: "https://a0.muscache.com/im/pictures/miso/Hosting-46419788/original/7b99a443-ac14-4e74-a741-c793dc9ca5b8.jpeg?im_w=720",
        preview: false
      },
      {
        spotId: 8,
        url: "https://a0.muscache.com/im/pictures/miso/Hosting-46419788/original/781514b7-dc46-44de-8313-9ee2744b1230.jpeg?im_w=720",
        preview: false
      },
      {
        spotId: 8,
        url: "https://a0.muscache.com/im/pictures/miso/Hosting-46419788/original/2649b1f8-f06d-405b-a270-3ae8feb9dd5d.jpeg?im_w=720",
        preview: false
      },
      {
        spotId: 9,
        url: "https://a0.muscache.com/im/pictures/dd88187b-91fe-4142-b5e7-c43e72bf3bf8.jpg?im_w=1200",
        preview: true
      },
      {
        spotId: 9,
        url: "https://a0.muscache.com/im/pictures/855386a3-16a2-4964-89d1-e3cdcf6c810d.jpg?im_w=720",
        preview: false
      },
      {
        spotId: 9,
        url: "https://a0.muscache.com/im/pictures/8ea19fe2-76b3-4066-8fae-81f8091d48d4.jpg?im_w=720",
        preview: false
      },
      {
        spotId: 9,
        url: "https://a0.muscache.com/im/pictures/2c38e2ab-ee10-4012-88bf-001bed111852.jpg?im_w=720",
        preview: false
      },
      {
        spotId: 9,
        url: "https://a0.muscache.com/im/pictures/da18aba2-2231-476d-8274-7e146a326848.jpg?im_w=720",
        preview: false
      },
      {
        spotId: 10,
        url: "https://a0.muscache.com/im/pictures/miso/Hosting-613149034120950698/original/1cccdd3d-cbfa-4c12-bcb3-ce2c33cbca6e.jpeg?im_w=1200",
        preview: true
      },
      {
        spotId: 10,
        url: "https://a0.muscache.com/im/pictures/miso/Hosting-613149034120950698/original/937cfb72-3dda-41ba-a2c9-df748dd58634.jpeg?im_w=720",
        preview: false
      },
      {
        spotId: 10,
        url: "https://a0.muscache.com/im/pictures/miso/Hosting-613149034120950698/original/280cfabb-0e1c-49aa-a8ee-2973ec95693d.jpeg?im_w=720",
        preview: false
      },
      {
        spotId: 10,
        url: "https://a0.muscache.com/im/pictures/miso/Hosting-613149034120950698/original/b0faa979-b8af-40e7-a136-15a192ec0a70.jpeg?im_w=720",
        preview: false
      },
      {
        spotId: 10,
        url: "https://a0.muscache.com/im/pictures/miso/Hosting-613149034120950698/original/e4590af9-9e64-4791-83a8-1d1495988357.jpeg?im_w=720",
        preview: false
      },
      {
        spotId: 11,
        url: "https://a0.muscache.com/im/pictures/9539ec1a-1929-44b9-a0de-efbb61627b34.jpg?im_w=1200",
        preview: true
      },
      {
        spotId: 11,
        url: "https://a0.muscache.com/im/pictures/dfe61e99-3452-4bf4-b34a-a8198260efc5.jpg?im_w=720",
        preview: false
      },
      {
        spotId: 11,
        url: "https://a0.muscache.com/im/pictures/b48896c7-e2e2-4442-ad9f-49ad0ec8e175.jpg?im_w=720",
        preview: false
      },
      {
        spotId: 11,
        url: "https://a0.muscache.com/im/pictures/81986104-5f64-4fb8-bdea-98af9dafeb3c.jpg?im_w=720",
        preview: false
      },
      {
        spotId: 11,
        url: "https://a0.muscache.com/im/pictures/30c97867-a3b0-4f39-b54a-616a9b986574.jpg?im_w=720",
        preview: false
      },
      {
        spotId: 12,
        url: "https://a0.muscache.com/im/pictures/9539ec1a-1929-44b9-a0de-efbb61627b34.jpg?im_w=1200",
        preview: true
      },
      {
        spotId: 12,
        url: "https://a0.muscache.com/im/pictures/dfe61e99-3452-4bf4-b34a-a8198260efc5.jpg?im_w=720",
        preview: false
      },
      {
        spotId: 12,
        url: "https://a0.muscache.com/im/pictures/b48896c7-e2e2-4442-ad9f-49ad0ec8e175.jpg?im_w=720",
        preview: false
      },
      {
        spotId: 12,
        url: "https://a0.muscache.com/im/pictures/81986104-5f64-4fb8-bdea-98af9dafeb3c.jpg?im_w=720",
        preview: false
      },
      {
        spotId: 12,
        url: "https://a0.muscache.com/im/pictures/30c97867-a3b0-4f39-b54a-616a9b986574.jpg?im_w=720",
        preview: false
      },
      {
        spotId: 13,
        url: "https://a0.muscache.com/im/pictures/9539ec1a-1929-44b9-a0de-efbb61627b34.jpg?im_w=1200",
        preview: true
      },
      {
        spotId: 13,
        url: "https://a0.muscache.com/im/pictures/dfe61e99-3452-4bf4-b34a-a8198260efc5.jpg?im_w=720",
        preview: false
      },
      {
        spotId: 13,
        url: "https://a0.muscache.com/im/pictures/b48896c7-e2e2-4442-ad9f-49ad0ec8e175.jpg?im_w=720",
        preview: false
      },
      {
        spotId: 13,
        url: "https://a0.muscache.com/im/pictures/81986104-5f64-4fb8-bdea-98af9dafeb3c.jpg?im_w=720",
        preview: false
      },
      {
        spotId: 13,
        url: "https://a0.muscache.com/im/pictures/30c97867-a3b0-4f39-b54a-616a9b986574.jpg?im_w=720",
        preview: false
      },
      {
        spotId: 14,
        url: "https://a0.muscache.com/im/pictures/9539ec1a-1929-44b9-a0de-efbb61627b34.jpg?im_w=1200",
        preview: true
      },
      {
        spotId: 14,
        url: "https://a0.muscache.com/im/pictures/dfe61e99-3452-4bf4-b34a-a8198260efc5.jpg?im_w=720",
        preview: false
      },
      {
        spotId: 14,
        url: "https://a0.muscache.com/im/pictures/b48896c7-e2e2-4442-ad9f-49ad0ec8e175.jpg?im_w=720",
        preview: false
      },
      {
        spotId: 14,
        url: "https://a0.muscache.com/im/pictures/81986104-5f64-4fb8-bdea-98af9dafeb3c.jpg?im_w=720",
        preview: false
      },
      {
        spotId: 14,
        url: "https://a0.muscache.com/im/pictures/30c97867-a3b0-4f39-b54a-616a9b986574.jpg?im_w=720",
        preview: false
      },
      {
        spotId: 15,
        url: "https://a0.muscache.com/im/pictures/9539ec1a-1929-44b9-a0de-efbb61627b34.jpg?im_w=1200",
        preview: true
      },
      {
        spotId: 15,
        url: "https://a0.muscache.com/im/pictures/dfe61e99-3452-4bf4-b34a-a8198260efc5.jpg?im_w=720",
        preview: false
      },
      {
        spotId: 15,
        url: "https://a0.muscache.com/im/pictures/b48896c7-e2e2-4442-ad9f-49ad0ec8e175.jpg?im_w=720",
        preview: false
      },
      {
        spotId: 15,
        url: "https://a0.muscache.com/im/pictures/81986104-5f64-4fb8-bdea-98af9dafeb3c.jpg?im_w=720",
        preview: false
      },
      {
        spotId: 15,
        url: "https://a0.muscache.com/im/pictures/30c97867-a3b0-4f39-b54a-616a9b986574.jpg?im_w=720",
        preview: false
      },
      {
        spotId: 16,
        url: "https://a0.muscache.com/im/pictures/9539ec1a-1929-44b9-a0de-efbb61627b34.jpg?im_w=1200",
        preview: true
      },
      {
        spotId: 16,
        url: "https://a0.muscache.com/im/pictures/dfe61e99-3452-4bf4-b34a-a8198260efc5.jpg?im_w=720",
        preview: false
      },
      {
        spotId: 16,
        url: "https://a0.muscache.com/im/pictures/b48896c7-e2e2-4442-ad9f-49ad0ec8e175.jpg?im_w=720",
        preview: false
      },
      {
        spotId: 16,
        url: "https://a0.muscache.com/im/pictures/81986104-5f64-4fb8-bdea-98af9dafeb3c.jpg?im_w=720",
        preview: false
      },
      {
        spotId: 16,
        url: "https://a0.muscache.com/im/pictures/30c97867-a3b0-4f39-b54a-616a9b986574.jpg?im_w=720",
        preview: false
      },
      {
        spotId: 17,
        url: "https://a0.muscache.com/im/pictures/9539ec1a-1929-44b9-a0de-efbb61627b34.jpg?im_w=1200",
        preview: true
      },
      {
        spotId: 17,
        url: "https://a0.muscache.com/im/pictures/dfe61e99-3452-4bf4-b34a-a8198260efc5.jpg?im_w=720",
        preview: false
      },
      {
        spotId: 17,
        url: "https://a0.muscache.com/im/pictures/b48896c7-e2e2-4442-ad9f-49ad0ec8e175.jpg?im_w=720",
        preview: false
      },
      {
        spotId: 17,
        url: "https://a0.muscache.com/im/pictures/81986104-5f64-4fb8-bdea-98af9dafeb3c.jpg?im_w=720",
        preview: false
      },
      {
        spotId: 17,
        url: "https://a0.muscache.com/im/pictures/30c97867-a3b0-4f39-b54a-616a9b986574.jpg?im_w=720",
        preview: false
      },
      {
        spotId: 18,
        url: "https://a0.muscache.com/im/pictures/9539ec1a-1929-44b9-a0de-efbb61627b34.jpg?im_w=1200",
        preview: true
      },
      {
        spotId: 18,
        url: "https://a0.muscache.com/im/pictures/dfe61e99-3452-4bf4-b34a-a8198260efc5.jpg?im_w=720",
        preview: false
      },
      {
        spotId: 18,
        url: "https://a0.muscache.com/im/pictures/b48896c7-e2e2-4442-ad9f-49ad0ec8e175.jpg?im_w=720",
        preview: false
      },
      {
        spotId: 18,
        url: "https://a0.muscache.com/im/pictures/81986104-5f64-4fb8-bdea-98af9dafeb3c.jpg?im_w=720",
        preview: false
      },
      {
        spotId: 18,
        url: "https://a0.muscache.com/im/pictures/30c97867-a3b0-4f39-b54a-616a9b986574.jpg?im_w=720",
        preview: false
      },
      {
        spotId: 19,
        url: "https://a0.muscache.com/im/pictures/9539ec1a-1929-44b9-a0de-efbb61627b34.jpg?im_w=1200",
        preview: true
      },
      {
        spotId: 19,
        url: "https://a0.muscache.com/im/pictures/dfe61e99-3452-4bf4-b34a-a8198260efc5.jpg?im_w=720",
        preview: false
      },
      {
        spotId: 19,
        url: "https://a0.muscache.com/im/pictures/b48896c7-e2e2-4442-ad9f-49ad0ec8e175.jpg?im_w=720",
        preview: false
      },
      {
        spotId: 19,
        url: "https://a0.muscache.com/im/pictures/81986104-5f64-4fb8-bdea-98af9dafeb3c.jpg?im_w=720",
        preview: false
      },
      {
        spotId: 19,
        url: "https://a0.muscache.com/im/pictures/30c97867-a3b0-4f39-b54a-616a9b986574.jpg?im_w=720",
        preview: false
      },
      {
        spotId: 20,
        url: "https://a0.muscache.com/im/pictures/9539ec1a-1929-44b9-a0de-efbb61627b34.jpg?im_w=1200",
        preview: true
      },
      {
        spotId: 20,
        url: "https://a0.muscache.com/im/pictures/dfe61e99-3452-4bf4-b34a-a8198260efc5.jpg?im_w=720",
        preview: false
      },
      {
        spotId: 20,
        url: "https://a0.muscache.com/im/pictures/b48896c7-e2e2-4442-ad9f-49ad0ec8e175.jpg?im_w=720",
        preview: false
      },
      {
        spotId: 20,
        url: "https://a0.muscache.com/im/pictures/81986104-5f64-4fb8-bdea-98af9dafeb3c.jpg?im_w=720",
        preview: false
      },
      {
        spotId: 20,
        url: "https://a0.muscache.com/im/pictures/30c97867-a3b0-4f39-b54a-616a9b986574.jpg?im_w=720",
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
