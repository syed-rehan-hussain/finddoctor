const mongoose = require("mongoose");
const Schema = mongoose.Schema;
 
const daysoffSchema = new Schema({
  doctorId: {
    type:Schema.Types.ObjectId,
    ref: "User"
  },
  date: Date,
  createdAt: {
    type: Date,
    default: Date.now,
  },
});
 
module.exports = mongoose.model("Daysoff", daysoffSchema);