'use strict';
const Event = require('./event')
const Band = require('./band')

const { Model, Deferrable } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class MeetGreet extends Model {
    /**
     
Helper method for defining associations.
   
This method is not a part of Sequelize lifecycle.
The models/index file will call this method automatically.*/
static associate(models) {// define association here
}
}
MeetGreet.init({
  meet_greet_id: {
    type:DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull:false
  },
  date: {
    type:DataTypes.DATE,
    allowNull:false
  },
  available_start_time: {
    type:DataTypes.DATE,
    allowNull:false
  },
  end_time: {
    type:DataTypes.DATE,
    allowNull:false
  },
  event_id: {
    type:DataTypes.INTEGER,
    allowNull:false,
    references: {
      // This is a reference to another model
      model: Event,

      // This is the column name of the referenced model
      key: 'event_id',

      // With PostgreSQL, it is optionally possible to declare when to check the foreign key constraint, passing the Deferrable type.
      deferrable: Deferrable.INITIALLY_IMMEDIATE
}
    },
  band_id: {type:DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Band,
      key: 'band_id',
      deferrable: Deferrable.INITIALLY_IMMEDIATE}}}, {
sequelize,
    modelName: 'MeetGreet',
    tableName: 'meet_greets',
    timestamps: false
  });
  return MeetGreet;
};