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
        console.error("❌ Gmail SMTP verification failed:");
        console.error(error.message);
    } else {
        console.log("✅ Gmail SMTP connection successful");
    }
});

module.exports = {
    transporter,
    receiverEmail,
};