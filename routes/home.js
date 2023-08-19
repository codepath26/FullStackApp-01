const express = require('express');
const router = express.Router();
const appointmentController = require('../controllers/app');

 router.get('/',appointmentController.getApointment);
 router.post('/',appointmentController.postAppointment);
   router.get('/success',appointmentController.datadisplay);


module.exports = router;