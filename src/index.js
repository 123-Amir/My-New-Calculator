const express = require('express');
const path = require('path');
const cors = require("cors");
const bcrypt = require('bcryptjs');
const collection = require("./config");
require('dotenv').config();

const app = express();
app.use(cors());
// Convert data into JSON format
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Use EJS as the view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '../views')); // ✅ Render ke liye sahi path

// Static files
app.use(express.static(path.join(__dirname, '../public'))); // ✅ Public folder ka bhi sahi path

// Routes
app.get("/", (req, res) => res.render("index"));
app.get("/signin", (req, res) => res.render("signin"));
app.get("/signup", (req, res) => res.render("signup"));
app.get("/forgetpwd", (req, res) => res.render("forgetpwd"));
app.get("/financial", (req, res) => res.render("financial"));
app.get("/conversion", (req, res) => res.render("conversion"));
app.get("/scientific", (req, res) => res.render("scientific"));
app.get("/health&fitness", (req, res) => res.render("health&fitness"));
app.get("/math&algebra", (req, res) => res.render("math&algebra"));
app.get("/geometry", (req, res) => res.render("geometry"));

// Register User
app.post("/signup", async (req, res) => {
    try {
        const { name, email, password } = req.body;

        // Check if user already exists
        const existingUser = await collection.findOne({ name });
        if (existingUser) {
            return res.send("User already exists.");
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Save user
        const userdata = await collection.create({ name, email, password: hashedPassword });
        console.log(userdata);
        res.send("User registered successfully.");
    } catch (error) {
        console.error(error);
        res.status(500).send("Internal Server Error");
    }
});

// Login user
app.post("/signin", async (req, res) => {
    try {
        const { username, password } = req.body;
        const user = await collection.findOne({ name: username });

        if (!user) {
            return res.send("Username not found");
        }

        // Compare the hashed password
        const isPasswordMatch = await bcrypt.compare(password, user.password);
        if (isPasswordMatch) {
            res.render("index");
        } else {
            res.send("Wrong Password");
        }
    } catch (error) {
        console.error(error);
        res.status(500).send("Internal Server Error");
    }
});

// Start server with dynamic port
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server running on Port: ${port}`);
});

