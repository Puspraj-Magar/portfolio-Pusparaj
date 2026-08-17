const nodemailer = require("nodemailer");

const emailUser = process.env.EMAIL_USER;
const emailPass = process.env.EMAIL_PASS;
const receiverEmail = process.env.RECEIVER_EMAIL;

// Check whether all required email variables exist
const isEmailConfigured =
    Boolean(emailUser) &&
    Boolean(emailPass) &&
    Boolean(receiverEmail);

// Create Gmail transporter
const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: emailUser,
        pass: emailPass,
    },
});

// Verify Gmail connection only when credentials exist
if (isEmailConfigured) {
    transporter.verify((error) => {
        if (error) {
            console.error("❌ Gmail SMTP verification failed:");
            console.error(error.message);
        } else {
            console.log("✅ Gmail SMTP connection successful");
        }
    });
} else {
    console.error("❌ Email environment variables are missing.");
}

module.exports = {
    transporter,
    receiverEmail,
    emailUser,
    isEmailConfigured,
};