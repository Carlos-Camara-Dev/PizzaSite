const Sequelize = require('sequelize');
const dbconfig = require('../config/database.js');
const client = require('./user.js');

const connection = new Sequelize(dbconfig);

client.init(connection);


module.exports = connection;