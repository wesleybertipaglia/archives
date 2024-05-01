'use strict';
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../database');

module.exports = (sequelize, DataTypes) => {
  class Prompt extends Model {
    static associate(models) {
      Prompt.belongsTo(models.User)
    }
  }
  Prompt.init({
    userId: DataTypes.INTEGER,
    title: DataTypes.STRING,
    content: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Prompt',
  });
  return Prompt;
};
