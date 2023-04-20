const mongoose = require("mongoose");
const Schema = mongoose.Schema;
 
const appointmentSchema = new Schema({
  doctorId: {
    type:Schema.Types.ObjectId,
    ref: "User"
  },
  clientId: {
    type:Schema.Types.ObjectId,
    ref: "User"
  },
  serviceId: {
    type:Schema.Types.ObjectId,
    ref: "Service"
  },
  isVirtual: Boolean,
  status: {
    type: String,
    enum : ['pending','paid','confirmed','completed'],
    default: 'pending'
    },
  date: Date,
  time: String,
  createdAt: {
    type: Date,
    default: Date.now,
  },
});
 
module.exports = mongoose.model("Appointment", appointmentSchema);