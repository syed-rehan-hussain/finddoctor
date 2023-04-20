const mongoose = require("mongoose");
const Schema = mongoose.Schema;
 
const service = new Schema({
  name: String,
  price: Number,
  createdAt: {
    type: Date,
    default: Date.now,
  },
});
 
module.exports = mongoose.model("Service", service);