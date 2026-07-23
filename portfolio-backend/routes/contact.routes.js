const express = require("express");
const { handleContact } = require("../controllers/contact.controller");

const router = express.Router();

router.get("/contact", (req, res) => {
    res.status(200).json({
        success: true,
        message: "Use POST /api/contact to send a message."
    });
});

router.post("/contact", handleContact);

module.exports = router;