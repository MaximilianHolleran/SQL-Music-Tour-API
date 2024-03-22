'use strict';
const {
  Model, Deferrable
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Event extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The models/index file will call this method automatically.
     */
    static associate({ Stage, StageEvent, MusicSet, MeetGreet }) {
      // Define associations here
      Event.belongsToMany(Stage, {
        foreignKey: "event_id",
        as: "stages",
        through: StageEvent
      });
      Event.hasMany(MusicSet, {
        foreignKey: "event_id",
        as: "sets"
      });
      Event.hasMany(MeetGreet, {
        foreignKey: "event_id",
        as: "meetGreets"
      })
    }
  }
  Event.init({
    name: DataTypes.STRING,
    start: DataTypes.DATE,
    end: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Event',
  });

  return Event;
};
