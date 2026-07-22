const { transporter, receiverEmail } = require("../config/email");

const handleContact = async(req, res) => {
    try {
        const { name, email, message } = req.body;

        console.log(`\n📨 Received Contact Request:`);
        console.log(`- Name: ${name}`);
        console.log(`- Email: ${email}`);
        console.log(`- Message: ${message}`);

        // 1. Basic validation
        if (!name || !email || !message) {
            return res.status(400).json({
                success: false,
                error: "All fields (name, email, message) are required."
            });
        }

        const nameTrim = name.trim();
        const emailTrim = email.trim();
        const messageTrim = message.trim();

        if (!nameTrim || !emailTrim || !messageTrim) {
            return res.status(400).json({
                success: false,
                error: "Fields cannot contain only whitespace."
            });
        }

        // 2. Email syntax validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(emailTrim)) {
            return res.status(400).json({
                success: false,
                error: "Please provide a valid email address."
            });
        }

        // 3. Setup email to Portfolio Owner (You)
        // replyTo lets you reply to the user's email directly by clicking "Reply" in your inbox
        const adminMailOptions = {
            from: `"Portfolio Contact Form" <${process.env.EMAIL_USER}>`,
            to: receiverEmail,
            replyTo: emailTrim,
            subject: `💼 New Contact from ${nameTrim}`,
            html: `
                <div style="font-family: sans-serif; padding: 20px; color: #333; max-width: 600px; border: 1px solid #eee; border-radius: 8px;">
                    <h2 style="color: #4f46e5; border-bottom: 2px solid #4f46e5; padding-bottom: 10px;">New Message Received</h2>
                    <p><strong>Name:</strong> ${nameTrim}</p>
                    <p><strong>Email:</strong> <a href="mailto:${emailTrim}">${emailTrim}</a></p>
                    <p><strong>Message:</strong></p>
                    <div style="background-color: #f9fafb; padding: 15px; border-left: 4px solid #4f46e5; border-radius: 4px; white-space: pre-wrap;">${messageTrim}</div>
                    <hr style="border: 0; border-top: 1px solid #eee; margin: 20px 0;">
                    <p style="font-size: 0.85em; color: #666;">Sent from your portfolio website on ${new Date().toLocaleString()}</p>
                </div>
            `
        };

        // 4. Send notification email to Admin
        await transporter.sendMail(adminMailOptions);
        console.log("✅ Admin notification email sent successfully");

        // 5. Setup Auto-Reply to Visitor
        const userMailOptions = {
            from: `"Puspraj Magar" <${process.env.EMAIL_USER}>`,
            to: emailTrim,
            subject: "Thank you for reaching out!",
            html: `
                <div style="font-family: sans-serif; padding: 20px; color: #333; max-width: 600px; border: 1px solid #eee; border-radius: 8px;">
                    <h2 style="color: #4f46e5;">Hi ${nameTrim},</h2>
                    <p>Thank you for reaching out! I've received your message and will read it as soon as possible.</p>
                    <p>I usually respond within 24-48 hours. If it's urgent, please reach out via LinkedIn or Phone.</p>
                    <hr style="border: 0; border-top: 1px solid #eee; margin: 20px 0;">
                    <h3 style="color: #666; font-size: 1.1em;">Here is a copy of your message:</h3>
                    <div style="background-color: #f9fafb; padding: 15px; border-left: 4px solid #9ca3af; border-radius: 4px; white-space: pre-wrap;">${messageTrim}</div>
                    <br>
                    <p>Best regards,</p>
                    <p><strong>Puspraj Magar</strong><br><span style="color: #666; font-size: 0.9em;">Software Engineer & Portfolio Owner</span></p>
                </div>
            `
        };

        // Send confirmation email (runs asynchronously; won't block response)
        transporter.sendMail(userMailOptions)
            .then(() => console.log("✅ Auto-confirmation email sent to visitor"))
            .catch(err => console.error("⚠️ Failed to send auto-reply email:", err.message));

        // 6. Return response to React
        return res.status(200).json({
            success: true,
            message: "Your message has been sent successfully!"
        });

    } catch (error) {
        console.error("❌ Contact controller error:", error);
        return res.status(500).json({
            success: false,
            error: "Internal Server Error. Please try again later."
        });
    }
};

module.exports = {
    handleContact
};