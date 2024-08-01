const { DataTypes } = require('sequelize');
const sequelize = require('../config/config');
const User = require('./user');

const Company = sequelize.define('Companny', {
    companyname: { type: DataTypes.STRING, allowNull: false },
    location: { type: DataTypes.STRING, allowNull: false },
    description: { type: DataTypes.STRING, allowNull: false },
    userId: { type: DataTypes.INTEGER, allowNull: false },
});

User.hasMany(Company,{foreignKey:'userId',foreignKeyConstraint: true})

module.exports = Company;
