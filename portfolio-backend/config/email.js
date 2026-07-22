const nodemailer = require("nodemailer");

const receiverEmail = process.env.RECEIVER_EMAIL;

// Verify environment variables are present before configuration
if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
    console.warn("⚠️ Warning: EMAIL_USER or EMAIL_PASS environment variables are not set. Nodemailer will fail.");
}

const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS, // Needs Google 16-character App Password
    },
});

module.exports = {
    transporter,
    receiverEmail,
};