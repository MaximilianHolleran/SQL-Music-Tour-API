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
    await queryInterface.bulkInsert('Events', [
      { name: 'The Motet', band_id: 1, event_id: 1, start_time: new Date('2024-03-28 18:00:00'), end_time: new Date('2024-03-29 18:00:00')},
      { name: 'Lyrical Lemonade', band_id: 1, event_id: 2, start_time: new Date('2024-04-28 18:00:00'), end_time: new Date('2024-04-29 18:00:00')}
     ])
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Events', null, {});   
  }
};
