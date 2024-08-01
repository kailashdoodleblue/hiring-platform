const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('hiring_platform_db', 'root', 'root', {
  host: 'localhost',
  dialect: 'mysql'
});

module.exports = sequelize;



