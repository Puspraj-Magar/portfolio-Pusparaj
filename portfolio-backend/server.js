const express = require("express");
const cors = require("cors");
const rateLimit = require("express-rate-limit");
require("dotenv").config();

const contactRoutes = require("./routes/contact.routes");

const app = express();
const PORT = process.env.PORT || 5000;

// Rate limiting to prevent spam submissions
const apiLimiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 10, // Limit each IP to 10 requests per windowMs
    message: {
        success: false,
        error: "Too many message submissions from this IP, please try again later."
    },
    standardHeaders: true,
    legacyHeaders: false,
});

// Middleware
app.use(cors({
    origin: process.env.CLIENT_URL || "http://localhost:5173", // Allow react dev port
    methods: ["POST", "GET"],
    credentials: true
}));
app.use(express.json());

// Apply rate limiter to API contact route
app.use("/api/contact", apiLimiter);

// API Routes
app.use("/api", contactRoutes);

// Base route for server checking
app.get("/", (req, res) => {
    res.send("Portfolio Backend API is Running!");
});

// 404 handler for unmatched routes
app.use((req, res) => {
    res.status(404).json({
        success: false,
        message: "Route not found"
    });
});

// Start Server
app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
    console.log(`📬 Contact endpoint: POST http://localhost:${PORT}/api/contact`);
});