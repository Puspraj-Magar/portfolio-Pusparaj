const nodemailer = require("nodemailer");

const emailUser = process.env.EMAIL_USER;
const emailPass = process.env.EMAIL_PASS;
const receiverEmail = process.env.RECEIVER_EMAIL;
const isEmailConfigured = Boolean(emailUser && emailPass && receiverEmail);

const transporter = nodemailer.createTransport({
    service: "gmail",
    secure: true,
    auth: {
        user: emailUser,
        pass: emailPass,
    },
});

if (isEmailConfigured) {
    transporter.verify((error, success) => {
        if (error) {
            console.error("❌ Email configuration error:", error.message);
        } else {
            console.log("✅ Email server is ready");
        }
    });
} else {
    console.error("⚠️ Email service is not configured. Set EMAIL_USER, EMAIL_PASS, and RECEIVER_EMAIL.");
}

module.exports = {
    transporter,
    receiverEmail,
    isEmailConfigured,
};