const express = require("express");

const cors = require('cors');

const jwt = require('jsonwebtoken');
// const jwt = require('../middleware/check-auth');
const {
  getAllDaysoffs,
  createDaysoff,
  getDaysoffById,
  updateDaysoff,
  deleteDaysoff,
  optionsDayoff,
  getAllDaysOffOfDoctor
} = require("../controllers/DaysoffController");

const router = express.Router();

//router.route("/").options(optionsDayoff);
router.route("/:id").get(getAllDaysOffOfDoctor);
router.route("/").get(getAllDaysoffs).post(createDaysoff);
router.route("/:id").put(updateDaysoff).delete(deleteDaysoff);
//router.route("/:id").get(getDaysoffById)
 
module.exports = router;