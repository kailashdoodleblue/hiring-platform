const { DataTypes } = require('sequelize');
const sequelize = require('../config/config');
const Job = require('./Job');
const User=require('./user')

const Application = sequelize.define('Applications', {
  jobId: { type: DataTypes.INTEGER, allowNull: false },
  userId: { type: DataTypes.INTEGER, allowNull: false },
  // coverLetter: { type: DataTypes.STRING, allowNull: false  },
  status:{type: DataTypes.STRING, allowNull: false ,defaultValue:"pending"}
});

User.hasMany(Application,{foreignKey:'userId',foreignKeyConstraint: true})
Job.hasOne(Application,{foreignKey:'jobId',foreignKeyConstraint: true})

module.exports = Application;
