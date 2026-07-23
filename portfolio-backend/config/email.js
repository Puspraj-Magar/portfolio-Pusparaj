const nodemailer = require("nodemailer");

const receiverEmail = process.env.RECEIVER_EMAIL;

const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
    },
});

transporter.verify((error, success) => {
    if (error) {
        console.error("❌ Email configuration error:", error.message);
    } else {
        console.log("✅ Email server is ready");
    }
});

module.exports = {
    transporter,
    receiverEmail,
};