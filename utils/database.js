const Sequelize = require('sequelize')

const sequelize  = new Sequelize('bookappointment','root','Parth@Sagar26',{
  host : 'localhost',
  dialect : 'mysql',
});
module.exports = sequelize;