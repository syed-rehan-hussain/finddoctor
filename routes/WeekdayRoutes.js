const express = require("express");

const jwt = require('jsonwebtoken');
// const jwt = require('../middleware/check-auth');
const {
  getAllWeekdays,
  createWeekday,
  getWeekdayById,
  updateWeekday,
  deleteWeekday,
} = require("../controllers/WeekdayController");
 
const router = express.Router();
 
router.route("/").get(getAllWeekdays).post(createWeekday);
router.route("/:id").get(getWeekdayById).put(updateWeekday).delete(deleteWeekday);
 
module.exports = router;