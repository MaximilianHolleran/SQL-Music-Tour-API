'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Stages', {
      stage_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      stage_name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      location_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'locations',
          key: 'location_id'
        }
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Stages');
  }
};