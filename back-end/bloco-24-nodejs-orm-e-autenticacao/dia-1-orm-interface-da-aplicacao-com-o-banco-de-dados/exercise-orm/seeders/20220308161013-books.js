'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => queryInterface.bulkInsert('Books', [
    {
      title: 'Game of Thrones',
      author: 'George R.R. Martin',
      pageQuantity: 542,
      createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
    },
    {
      title: 'Miracle of Morning',
      author: 'Hal Erold',
      pageQuantity: 174,
      createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
    },
  ], []),

  down: async (queryInterface, Sequelize) => queryInterface.bulkDelete('Books', null, {}),
};
