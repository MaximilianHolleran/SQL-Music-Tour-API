'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('stage_events', {
      stages_events_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      stage_id: {
        type: Sequelize.STRING
      },
      event_id: {
        allowNull: false,
        type: Sequelize.DATE,
        references: {
          model: 'events',
          key: 'event_id'
        }
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('stage_events');
  }
};