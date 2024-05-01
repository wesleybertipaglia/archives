'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('users', [
      {
        username: 'rtrickett0',
        name: 'Ransom Trickett',
        email: 'rtrickett0@com.com',
        password: '$2a$04$228hgoRuYZXzZ.bXvT958e2K/wjYO26ydTFCcYQAPjeqg3A5fivke',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        username: 'usennett1',
        name: 'Udell Sennett',
        email: 'usennett1@csmonitor.com',
        password: '$2a$04$zAkGdWxuA2cnPpIZV6rK3uShG10foJ5RwYbBNweywlFP2mQFZMBHK',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        username: 'wcutchie2',
        name: 'Wolfgang Cutchie',
        email: 'wcutchie2@list-manage.com',
        password: '$2a$04$Ka8GWGriA951nbpZ.6.h.eS.EIvwyMLFJcHaKVF3Fc1IekRtp2EMO',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        username: 'rskelhorn3',
        name: 'Ruth Skelhorn',
        email: 'rskelhorn3@google.pl',
        password: '$2a$04$kXLzMXduelXpueXpXOUJmuxG7e3m501WBuGG5X.V6Bw5btJwYcX2m',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        username: 'msafe4',
        name: 'Mathias Safe',
        email: 'msafe4@reverbnation.com',
        password: '$2a$04$pzvOYf2dreWxW45uuiCQ7..d77S53RGSTFyKrQvdd/TZIf5EmznMm',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        username: 'fshadfourth5',
        name: 'Farleigh Shadfourth',
        email: 'fshadfourth5@mediafire.com',
        password: '$2a$04$AqfrTFiHkhg4c/pkJauFk.SC2PtcjGLsbnwE7JunCK9qOb2DOOrr6',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        username: 'gjamme6',
        name: 'Germaine Jamme',
        email: 'gjamme6@uiuc.edu',
        password: '$2a$04$LPCwQVOMT5y2yyxouqbGLu7KGOu5rE0FEs.iYBgLMms2VspuDF.la',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        username: 'jlamonby7',
        name: 'Jayme Lamonby',
        email: 'jlamonby7@artisteer.com',
        password: '$2a$04$cZNfapQe47.DX9MZpgfHi.0mL9Hy4naYEU.PJccbPATlVfIDq4LqW',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        username: 'hkislingbury8',
        name: 'Hilton Kislingbury',
        email: 'hkislingbury8@webmd.com',
        password: '$2a$04$pJy6BwNuoCrhIEpmqfNjjedMLE/QctHJQMKHBair3UeMva6qpSLzm',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        username: 'esewall9',
        name: 'Elfie Sewall',
        email: 'esewall9@yolasite.com',
        password: '$2a$04$7ExGiIWexMFjiDNue8qWnurdesMhnUK1qv4bbMwVToEtUIEsI4u3S',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        username: 'jgillbee',
        name: 'Jenilee Gillbee',
        email: 'jenileegillbee@mail.com',
        password: '$2a$04$7ExGiIWexMFjiDNue8qWnurdesMhnUK1qv4bbMwVToEtUIEsI4u3S',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('users', null, {});
  }
};
