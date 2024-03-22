'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('Stages', [
      { name: 'Red Rocks', createdAt: new Date(), updatedAt: new Date() },
      { name: 'The Ceverns', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Dillon Amphitheatre', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Lincoln Theatre', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Cervantes', createdAt: new Date(), updatedAt: new Date() }
    ], {});
  },
 
  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Stages', null, {});
  }
};
