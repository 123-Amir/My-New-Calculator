const mongoose = require("mongoose");
require("dotenv").config();  // ✅ dotenv se environment variables load karna

// MongoDB URI environment variable se lena
const mongoURI = process.env.MONGODB_URI || "mongodb://0.0.0.0:27017/users";

mongoose.connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => {
    console.log("Database connected Successfully");
})
.catch((error) => {
    console.log("Database not connected:", error);
});

// Schema
const LoginSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
});

// Collection
const collection = new mongoose.model("Collection1", LoginSchema);

// Export
module.exports = collection;
