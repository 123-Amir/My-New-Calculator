const BACKEND_URL = "/api"; 
const mongoose = require("mongoose");
require("dotenv").config();  // ✅ Load environment variables

// MongoDB URI from environment variable
const mongoURI = process.env.MONGODB_URI;

if (!mongoURI) {
    console.error("❌ MONGODB_URI is missing in .env file!");
    process.exit(1); // Exit if no DB URL is provided
}

// Connect to MongoDB
mongoose.connect(mongoURI)
    .then(() => console.log("✅ Database connected successfully"))
    .catch((error) => {
        console.error("❌ Database not connected:", error);
        process.exit(1);
    });

// Schema
const LoginSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true }
});

// Collection
const collection = mongoose.model("users", LoginSchema); // ✅ Collection name lowercase aur plural recommended

// Export
module.exports = collection;
