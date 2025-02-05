const express = require('express');
const path = require('path');
const bcrypt = require('bcryptjs');
const collection = require("./config");

const app = express();
// Convert data into JSON format
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Use EJS as the view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '../views'));

// Static files
app.use(express.static(path.join(__dirname, '../public')));

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
    const data = {
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
    };

    // Check if user already exists
    const existingUser = await collection.findOne({ name: data.name });
    if (existingUser) {
        res.send("User already exists.");
    } else {
        // Hash the password
        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(data.password, saltRounds);

        data.password = hashedPassword; // Replace the password with the hashed one
        const userdata = await collection.insertMany(data);
        console.log(userdata);
        res.send("User registered successfully.");
    }
});

// Login user
app.post("/signin", async (req, res) => {
    try {
        const check = await collection.findOne({ name: req.body.username });
        if (!check) {
            res.send("Username not found");
        }

        // Compare the hashed password with the plain text
        const isPasswordMatch = await bcrypt.compare(req.body.password, check.password);
        if (isPasswordMatch) {
            res.render("index");
        } else {
            res.send("Wrong Password");
        }
    } catch {
        res.send("Wrong Details");
    }
});

// Start server
const port = 3000;
app.listen(port, () => {
    console.log(`Server running on Port: ${port}`);
});
