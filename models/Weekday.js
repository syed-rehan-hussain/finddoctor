const mongoose = require("mongoose");
const Schema = mongoose.Schema;
 
const weekdaySchema = new Schema({
  doctorId: {
    type:Schema.Types.ObjectId,
    ref: "User"
  },
  dayindex: Number,
  time_arr: String,
  createdAt: {
    type: Date,
    default: Date.now,
  },
});
 
module.exports = mongoose.model("Weekday", weekdaySchema);