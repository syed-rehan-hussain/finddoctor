const express = require("express");

const jwt = require('jsonwebtoken');
const jwt = require('../middleware/check-auth');
const {
  getAllBlogs,
  createBlog,
  getBlogById,
  updateBlog,
  deleteBlog,
} = require("../controllers/BlogController");
 
const router = express.Router();
 
router.route("/").get(getAllBlogs).post(createBlog);
router.route("/:id").get(getBlogById).put(updateBlog).delete(deleteBlog);
 
module.exports = router;