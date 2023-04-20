const express = require("express");

const jwt = require('jsonwebtoken');
// const jwt = require('../middleware/check-auth');
const {
  getAllServices,
  createService,
  getServiceById,
  updateService,
  deleteService,
} = require("../controllers/ServiceController");
 
const router = express.Router();
 
router.route("/").get(getAllServices).post(createService);
router.route("/:id").get(getServiceById).put(updateService).delete(deleteService);
 
module.exports = router;