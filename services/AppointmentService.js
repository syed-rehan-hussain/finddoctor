const AppointmentModel = require("../models/Appointment");
 
exports.getAllAppointments = async () => {
  return await AppointmentModel.find();
};
 
exports.createAppointment = async (appointment) => {
  return await AppointmentModel.create(appointment);
};
exports.getAppointmentById = async (id) => {
  return await AppointmentModel.findById(id);
};
 
exports.updateAppointment = async (id, appointment) => {
  return await AppointmentModel.findByIdAndUpdate(id, appointment);
};
 
exports.deleteAppointment = async (id) => {
  return await AppointmentModel.findByIdAndDelete(id);
};