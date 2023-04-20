const express = require("express");

const jwt = require('jsonwebtoken');
// const jwt = require('../middleware/check-auth');
const {
  getAllAppointments,
  createAppointment,
  getAppointmentById,
  updateAppointment,
  deleteAppointment,
} = require("../controllers/AppointmentController");
 
const router = express.Router();
 
router.route("/").get(getAllAppointments).post(createAppointment);
router.route("/:id").get(getAppointmentById).put(updateAppointment).delete(deleteAppointment);
 
module.exports = router;