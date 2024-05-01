'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('users', [
      {
        username: "esaltman0",
        name: "Emilee Saltman",
        email: "esaltman0@360.cn",
        password: "$2a$04$W5rISRJ.s1IbB4DJycp3KuZB/ALdEhDBMQLRdECqUWkcscLRxYVNa",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        username: "gvernham1",
        name: "Gerladina Vernham",
        email: "gvernham1@fotki.com",
        password: "$2a$04$51p7VeLujD7jR.cvF9cEiepnjES9B7qfr7Kid9DODWbFJnUhxn28O",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        username: "batyea2",
        name: "Basil Atyea",
        email: "batyea2@drupal.org",
        password: "$2a$04$zP117zkgzkeVAaw3bXcvP.6518fhiGi7yyfBwcxs9hknflTnCHRpa",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        username: "hbeldom3",
        name: "Hazlett Beldom",
        email: "hbeldom3@nih.gov",
        password: "$2a$04$7n1YR9CRMKliFReL1Jk/sOSCnCq6FE2OgDejah6o0jsBQWKloIy0i",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        username: "dlecointe4",
        name: "Dov Lecointe",
        email: "dlecointe4@dot.gov",
        password: "$2a$04$NvRhPmW/1Y/bxHhykrQzYeF7MaCo7AM3GhXqqjfVqN7VyCx5Nt1aK",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        username: "kcastan5",
        name: "Keith Castan",
        email: "kcastan5@nps.gov",
        password: "$2a$04$hzcFUsX9IIumShlehrMg5u049u3R3e5zt.a5GBMthIAhtBYHElQR.",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        username: "jcanacott6",
        name: "Joya Canacott",
        email: "jcanacott6@virginia.edu",
        password: "$2a$04$vQdZG21R89ruj67u3Wuc/.7XNLH1OZ5ObGUYIdHg3yUd5T9R7oCk6",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        username: "aramey7",
        name: "Allie Ramey",
        email: "aramey7@salon.com",
        password: "$2a$04$qNvuA9Kxv/eQAQFfwaUVs.ak9ir0iagpWqbqn1fmYDc2DkIZAzddy",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        username: "jswallwell8",
        name: "Jocko Swallwell",
        email: "jswallwell8@wp.com",
        password: "$2a$04$MkA4oUvD2HKF3kEacXTWY.BcNA6B3fgbVrpm.1BPU8Zpx11VxOg66",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        username: "mlehrmann9",
        name: "Meredith Lehrmann",
        email: "mlehrmann9@clickbank.net",
        password: "$2a$04$LRhIJCJh6UowuJ2UDR4qQuF2Jei.vMRx.n.M8DX33PZrTQYKUsaPO",
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('users', null, {});
  }
};
