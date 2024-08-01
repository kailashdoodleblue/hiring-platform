const { DataTypes } = require('sequelize');
const sequelize = require('../config/config');
const Company = require('./company');

const Job = sequelize.define('Job', {
  companyId:{type: DataTypes.INTEGER, allowNull: false},
  title: { type: DataTypes.STRING, allowNull: false },
  description: { type: DataTypes.STRING, allowNull: false },
  noOfApplications: {type: DataTypes.INTEGER, allowNull: false,defaultValue:0}
});

Company.hasMany(Job,{foreignKey:'companyId',foreignKeyConstraint: true})

module.exports = Job;
