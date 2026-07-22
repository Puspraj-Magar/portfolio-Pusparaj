const express = require("express");
const { handleContact } = require("../controllers/contact.controller");

const router = express.Router();

// Route: POST /api/contact (note the "/api" prefix is added in server.js)
router.post("/contact", handleContact);

module.exports = router;