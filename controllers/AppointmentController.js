const appointmentService = require("../services/AppointmentService");
 
exports.getAllAppointments = async (req, res) => {
  try {
    const appointments = await appointmentService.getAllAppointments();
    res.json({ data: appointments, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
 
exports.createAppointment = async (req, res) => {
  try {
    const appointment = await appointmentService.createAppointment(req.body);
    res.json({ data: appointment, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
 
exports.getAppointmentById = async (req, res) => {
  try {
    const appointment = await appointmentService.getAppointmentById(req.params.id);
    // console.log(appointment);
    // console.log(appointment[0]['doctorId']);
   
    res.json({ data: appointment, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
 
exports.updateAppointment = async (req, res) => {
  try {
    const appointment = await appointmentService.updateAppointment(req.params.id, req.body);
    res.json({ data: appointment, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
 
exports.deleteAppointment = async (req, res) => {
  try {
    const appointment = await appointmentService.deleteAppointment(req.params.id);
    res.json({ data: appointment, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};