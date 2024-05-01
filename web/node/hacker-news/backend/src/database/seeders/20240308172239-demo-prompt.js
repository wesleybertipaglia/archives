'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('prompts', [
      {
        userId: 1,
        title: 'Superpower',
        content: 'If you could have any superpower, what would it be and why?',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 2,
        title: 'Energy Drink Bawls',
        content: 'Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 3,
        title: 'Wine - Red, Wolf Blass, Yellow',
        content: 'Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 4,
        title: 'Appetizer - Mini Egg Roll, Shrimp',
        content: 'Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 5,
        title: 'Chocolate - Milk, Callets',
        content: 'Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 6,
        title: 'Bagels Poppyseed',
        content: 'Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 6,
        title: 'Lamb - Whole Head Off,nz',
        content: 'Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 7,
        title: 'Fish - Artic Char, Cold Smoked',
        content: 'Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 7,
        title: 'Marzipan 50/50',
        content: 'Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 8,
        title: 'Drambuie',
        content: 'Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 8,
        title: 'Pate - Cognac',
        content: 'Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 9,
        title: 'Thyme - Lemon, Fresh',
        content: 'Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 10,
        title: 'Veal - Ground',
        content: 'Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 1,
        title: 'Oranges',
        content: 'Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('prompts', null, {});
  }
};
