const express = require("express");
const cors = require("cors");
const rateLimit = require("express-rate-limit");
require("dotenv").config();

const contactRoutes = require("./routes/contact.routes");

const app = express();
const PORT = process.env.PORT || 5000;

// Rate limiting
const apiLimiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 10,
    message: {
        success: false,
        error: "Too many message submissions from this IP, please try again later."
    },
    standardHeaders: true,
    legacyHeaders: false,
});

// Middleware
app.use(
    cors({
        origin: [
            process.env.CLIENT_URL || "http://localhost:5173",
            "http://localhost:5173"
        ],
        methods: ["POST", "GET"],
        credentials: true
    })
);

app.use(express.json());

// Apply rate limiter
app.use("/api/contact", apiLimiter);

// API Routes
app.use("/api", contactRoutes);

// Base route
app.get("/", (req, res) => {
    res.send("Portfolio Backend API is Running!");
});

// 404 handler
app.use((req, res) => {
    res.status(404).json({
        success: false,
        message: "Route not found"
    });
});

// Only start server locally
if (process.env.NODE_ENV !== "production") {
    app.listen(PORT, () => {
        console.log(`🚀 Server running on http://localhost:${PORT}`);
        console.log(
            `📬 Contact endpoint: POST http://localhost:${PORT}/api/contact`
        );
    });
}

// Export app for Vercel
module.exports = app;