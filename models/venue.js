'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Venue extends Model {
    /**
     
Helper method for defining associations.
This method is not a part of Sequelize lifecycle.
The models/index file will call this method automatically.*/
static associate(models) {// define association here
}
}
Venue.init({
  location_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,allowNull:false
  },
  location: {
    type: DataTypes.STRING,allowNull:false},
  capacity: {
    type: DataTypes.INTEGER,allowNull:false}}, {
  sequelize,
  modelName: 'Venue',
  tableName: 'venues',
  timestamps: false});
return Venue;
};