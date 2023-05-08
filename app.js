const Joi = require('joi');
Joi.objectId = require('joi-objectid')(Joi);
const express = require("express");
const app = express();
const blogRoute = require("./routes/BlogRoutes");
const userRoute = require("./routes/User");
const serviceRoute = require("./routes/ServiceRoutes");
const appointmentRoute = require("./routes/AppointmentRoutes");
const weekdayRoute = require("./routes/WeekdayRoutes");
const daysoffRoute = require("./routes/DaysoffRoutes");
const mongoose = require("mongoose");

mongoose.set("strictQuery", true);
//configure mongoose
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/CRUD",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("Connected to MongoDB");
    }
  }
);
 
//middleware
app.use(express.json());
app.use("/api/blogs", blogRoute);
app.use("/api/users", userRoute);
app.use("/api/services", serviceRoute);
app.use("/api/appointments", appointmentRoute);
app.use("/api/weekdays", weekdayRoute);
app.use("/api/daysoff", daysoffRoute);

app.listen(3001, () => {
  console.log("Server is running on port 3001");
});
 
module.exports = app;