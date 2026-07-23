const express = require("express");
const cors = require("cors");
const rateLimit = require("express-rate-limit");
require("dotenv").config();

const contactRoutes = require("./routes/contact.routes");
const { handleContact } = require("./controllers/contact.controller");

const app = express();

app.set("trust proxy", 1);

const PORT = process.env.PORT || 5000;

const allowedOrigins = [
    process.env.CLIENT_URL,
    "https://portfolio-pusparaj.netlify.app",
    "https://portfolio-pusparaj-7pfh.vercel.app",
    "http://localhost:5173",
].filter(Boolean);

const corsOptions = {
    origin: function(origin, callback) {
        if (!origin) {
            return callback(null, true);
        }

        if (allowedOrigins.includes(origin)) {
            return callback(null, true);
        }

        return callback(new Error("Not allowed by CORS"));
    },
    methods: ["GET", "POST", "OPTIONS"],
    allowedHeaders: ["Content-Type"],
    credentials: true,
};

app.use(cors(corsOptions));

app.options("*", cors(corsOptions));

app.use(express.json());

const apiLimiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 10,
    message: {
        success: false,
        error: "Too many message submissions from this IP, please try again later.",
    },
    standardHeaders: true,
    legacyHeaders: false,
});

app.use("/api/contact", apiLimiter);

app.get("/api/contact", (req, res) => {
    res.status(200).json({
        success: true,
        message: "Use POST /api/contact to send a message."
    });
});

app.post("/api/contact", handleContact);

app.use("/api", contactRoutes);

app.get("/", (req, res) => {
    res.send("Portfolio Backend API is Running!");
});

app.use((req, res) => {
    res.status(404).json({
        success: false,
        message: "Route not found",
    });
});

if (!process.env.VERCEL) {
    app.listen(PORT, () => {
        console.log(`🚀 Server running on http://localhost:${PORT}`);
    });
}

module.exports = app;