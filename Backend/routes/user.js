const express = require("express");
const router = express.Router();


const { addBlog } = require("../controller/addBlog");
const { showBlog } = require("../controller/showBlog");


router.post("/addBlog", addBlog);
router.get("/showBlog", showBlog);

module.exports = router;