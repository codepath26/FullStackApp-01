const { JSON } = require("sequelize");
const Appointment = require("../models/book");
const sequelize = require("../utils/database");
const { render } = require("ejs");
exports.getApointment = async (req, res, next) => {
  try {
   let allData = await Appointment.findAll()
      res.render('admin/display',{
        details : allData,
        success : false
      })
     }
     catch(err){
      console.log(err)
    }

  
};
exports.postAppointment = async (req, res, next) => {
  const { name, number, email } = req.body;
  try {

    await Appointment.create({
      name: name,
      number: number,
      email: email,
    });
   res.redirect('/success');
  } catch (err) {
    console.log(err);
  }
}
  exports.datadisplay = async (req, res) => {
   Appointment.findAll().then((allData)=>{
    res.render('admin/display',{
      details : allData ,
      success : true
    })
   }).catch(err=>console.log(err))
  };
  

