const AppointmentModel = require("../models/Appointment");
 
exports.getAllAppointments = async () => {
  return await AppointmentModel.find();
};
 
exports.createAppointment = async (appointment) => {
  return await AppointmentModel.create(appointment);
};
exports.getAppointmentById = async (id) => {
  const query = { "doctorId" : id };
  const data = AppointmentModel.find(query)
  //const doctor_name = AppointmentModel.find(query)
  // console.log(data['schema']);
  // console.log("divide");
  // console.log(data['schema']['obj']['date']);
  return await data;
};

exports.getAppointmentByClientId = async (id) => {
  const query = { "clientId" : id };
  const data = AppointmentModel.find(query)
  //const doctor_name = AppointmentModel.find(query)
  // console.log(data['schema']);
  // console.log("divide");
  // console.log(data['schema']['obj']['date']);
  return await data;
};
 
exports.updateAppointment = async (id, appointment) => {
  return await AppointmentModel.findByIdAndUpdate(id, appointment);
};
 
exports.deleteAppointment = async (id) => {
  return await AppointmentModel.findByIdAndDelete(id);
};