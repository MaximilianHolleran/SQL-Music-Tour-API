'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class MeetGreet extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Band, Event }) {
      // define association here
      MeetGreet.belongsTo(Band, {
        foreignKey: "band_id",
        as: "bands"
      })
    }
  }
  MeetGreet.init({
    name: DataTypes.STRING,
    merch: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'meet_greet',
  });
  return MeetGreet;
};