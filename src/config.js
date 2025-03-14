const express = require("express");
const path = require("path");
const cors = require("cors");
const bcrypt = require("bcryptjs");
const collection = require("./config");
const apiRoutes = require("./routes/apiRoutes");
require("dotenv").config();

const app = express();

// ✅ Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// ✅ __dirname fix for views folder
const viewsPath = path.join(__dirname, "../views");

// ✅ Static Files (public folder)
app.use(express.static(path.join(__dirname, "public")));

// ✅ Views Engine Setup
app.set("views", viewsPath);
app.set("view engine", "ejs");

// ✅ Routes for Rendering EJS Pages
app.get("/", (req, res) => res.render("index"));
app.get("/signin", (req, res) => res.render("signin"));
app.get("/signup", (req, res) => res.render("signup"));
app.get("/forgetpwd", (req, res) => res.render("forgetpwd"));
app.get("/financial", (req, res) => res.render("financial"));
app.get("/conversion", (req, res) => res.render("conversion"));
app.get("/scientific", (req, res) => res.render("scientific"));
app.get("/health-fitness", (req, res) => res.render("healthfitness")); // ✅ "&" hataya
app.get("/math-algebra", (req, res) => res.render("mathalgebra")); // ✅ "&" hataya
app.get("/geometry", (req, res) => res.render("geometry"));

// ✅ API Routes
app.use("/api", apiRoutes);

// ✅ Signup Route
app.post("/signup", async (req, res) => {
    try {
        const { name, email, password } = req.body;
        const existingUser = await collection.findOne({ name });

        if (existingUser) {
            return res.send("User already exists.");
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        await collection.create({ name, email, password: hashedPassword });
        res.send("User registered successfully.");
    } catch (error) {
        console.error(error);
        res.status(500).send("Internal Server Error");
    }
});

// ✅ Signin Route
app.post("/signin", async (req, res) => {
    try {
        const { username, password } = req.body;
        const user = await collection.findOne({ name: username });

        if (!user) {
            return res.send("Username not found");
        }

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

// ✅ Server Start
const port = process.env.PORT || 10000;
app.listen(port, () => {
    console.log(`Server running on Port: ${port}`);
});

