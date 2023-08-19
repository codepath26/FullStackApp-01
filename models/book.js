const {DataTypes} = require('sequelize');
const sequelize = require('../utils/database');

const Appointment = sequelize.define(
  'Appointment', {
     name :{
       type :DataTypes.STRING,
       allowNull : false,
     },
     number :{
     type :  DataTypes.INTEGER,
      allowNull : false,
     },
     email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isEmail: true,
      },
    },
});
module.exports = Appointment;