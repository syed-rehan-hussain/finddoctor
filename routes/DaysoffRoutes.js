const express = require("express");

const jwt = require('jsonwebtoken');
// const jwt = require('../middleware/check-auth');
const {
  getAllDaysoffs,
  createDaysoff,
  getDaysoffById,
  updateDaysoff,
  deleteDaysoff,
} = require("../controllers/DaysoffController");
 
const router = express.Router();
 
router.route("/").get(getAllDaysoffs).post(createDaysoff);
router.route("/:id").get(getDaysoffById).put(updateDaysoff).delete(deleteDaysoff);
 
module.exports = router;