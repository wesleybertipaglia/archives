const Sequelize = require('sequelize');
const config = require('../config/database');
const sequelize = new Sequelize(config);

module.exports = sequelize;