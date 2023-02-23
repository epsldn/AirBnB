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
        address: "191 Green Mountain",
        city: "Marfa",
        state: "Texas",
        country: "United States",
        lat: 1.54151345,
        lng: -23.31441,
        name: "Modern Solar Home South of Marfa",
        description: "Hip solar home ONE HOUR AND 20 MINUTES SOUTH OF MARFA. Just 20 minutes from Chinati Hot Springs. Fully furnished. True artists retreat with world class views. 2 bedrooms 3 baths. Cooks kitchen. Need only bring groceries. Great hiking in luxury setting. Stunning drive down pinto canyon road.",
        price: 550
      },
      {
        ownerId: 2,
        address: "6704 Pioneer Crossing",
        city: "Hidalgo",
        state: "Nuevo León",
        country: "Mexico",
        lat: 2.54151345,
        lng: -34.31441,
        name: "El Cubil in Potrero Chico Cilíndrica Room #1",
        description: "El Cubil is a beautiful and modern hostel just a 5-minute walk from the gates of El Potrero Chico Park, the internationally renowned rock climbing area in the state of Nuevo León.",
        price: 95
      },
      {
        ownerId: 2,
        address: "103 Westlake Dr",
        city: "Branson",
        state: "Missouri",
        country: "United States",
        lat: 3.54151345,
        lng: -45.31441,
        name: "NEW Tree+House at Indian Point | Amazing Lake View",
        description: "Welcome to the Tree + House at Indian Point! This is a custom built luxury modern treehouse for four. It's tucked neatly in the forest with walls of windows and breath taking views of Table Rock Lake.  Close proximity to Table Rock Lake and Silver Dollar City.",
        price: 279
      },
      {
        ownerId: 1,
        address: "123 Disney Lane",
        city: "Boerne",
        state: "Texas",
        country: "United States",
        lat: 37.7645358,
        lng: -122.4730327,
        name: "Owl Spring Ranch Bunkhouse",
        description: "Classic hill country cabin with amazing views from its perch on a cliff on the Guadalupe River. Located on a large ranch hosting exotic and native wildlife.  Relax in the plunge pool and settle in for an unforgettable retreat.",
        price: 300
      },
      {
        ownerId: 2,
        address: "198 Freedom Dr",
        city: "Lago Vista",
        state: "Texas",
        country: "United States",
        lat: 37.7645358,
        lng: -122.4730327,
        name: "Unique Eco-Glamping in TX Hill country - Pod #1!",
        description: "UDOSCAPE - a unique, heart-throbbing ADULTS-only eco-Glamping resort in Texas Hill Country. Site currently has 8 luxuriously furnished pods ranging from Deluxe to Deluxe-plus, all nestled up a hill with amazing hill country views. Amenities include grills, fire-pit, and hammock sites. Each Pod comes with a dedicated hot tub. All Pods are luxuriously furnished with plush beddings, en-suite restroom, kitchenette, dinning area, etc. Get ready to experience camping like never before!",
        price: 302
      },
      {
        ownerId: 2,
        address: "195 Freedom Dr",
        city: "London",
        state: "Arkansas",
        country: "United States",
        lat: 37.7645358,
        lng: -122.4730327,
        name: "Beautiful views! The JoCo Cabin on Big Piney Creek",
        description: "Come enjoy the JoCo Cabin with views of Piney Bay! There are multiple ways to enjoy the scenery including; enjoying a book on one of the multiple decks, in a hot tub, relaxing in a hammock or playing a game of ping pong while grilling out with your family and friends! Make sure to catch some of the best sunset views in Arkansas! With our outdoor lighting, you’ll be able to still enjoy the outside amenities into the night.",
        price: 283
      },
      {
        ownerId: 3,
        address: "192 Freedom Dr",
        city: "Belton",
        state: "Texas",
        country: "United States",
        lat: 37.7645358,
        lng: -122.4730327,
        name: "Lakefront House w/ Pool & Private Beach",
        description: "There is no better lakefront home to create amazing memories with family & friends. The bluest water you've seen in Texas with 180 degree views of Lake Belton.  Walk down the trail to private sandy beach water access. Lay out in the sun by the pool or grill out your favorite meal. Enjoy indoor and outdoor dining plus a large family room. All designer remodeled bathrooms, living space and plenty of beds to bring everyone. Just bring a towel. Swim and lake access at your own risk, no lifeguard.",
        price: 510
      },
      {
        ownerId: 3,
        address: "192 Liberty Dr",
        city: "Broken Bow",
        state: "Oklahoma",
        country: "United States",
        lat: 37.7645358,
        lng: -122.4730327,
        name: "Experience this BRAND NEW cabin",
        description: "Hell of a View is an absolutely stunning, newly constructed luxury cabin that is located just a few miles north of the restaurants, wineries, breweries, a casino and family entertainment of Hochatown. It sits majestically on top of the Forest Brook Loop Development just off of 259 and includes a 200-degree panoramic view of the rolling Ouachita National Forest.",
        price: 661
      },
      {
        ownerId: 3,
        address: "344 Liberty Dr",
        city: "Brewster County",
        state: "Texas",
        country: "United States",
        lat: 37.7645358,
        lng: -122.4730327,
        name: "@PerroLargoRanch",
        description: "Find absolute solitude camping at our dry campsite between Pack Saddle & Panther mountain. You’ll have access to our 8’x20’ insulated container and all 20 acres that surround it! This property is surrounded by mountain views and adventurous terrain. At night, you will be able to observe the darkest skies, every star and even the milky way on clear nights from our rooftop patio. During the day it’s perfect for observing tons of wildlife including wild donkeys, javelina and jackrabbits.",
        price: 65
      },
      {
        ownerId: 3,
        address: "352 Liberty Dr",
        city: "Broken Bow",
        state: "Oklahoma",
        country: "United States",
        lat: 37.7645358,
        lng: -122.4730327,
        name: "Misty Mountain-3 Bdr|Great For Kids!|2 Game Rooms!",
        description: "Unique and extraordinary like no other, the newly renovated Misty Mountain cabin has been carefully curated with no detail overlooked to charm every member of your group! This custom-fitted vacation cabin is tucked away on a peaceful cul-de-sac in the Eagle Mountain East Development, with more than enough parking for cars and trailers.",
        price: 573
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
