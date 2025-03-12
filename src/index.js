const express = require("express");
const path = require("path");
const cors = require("cors");
const bcrypt = require("bcryptjs");
const collection = require("./config");
const apiRoutes = require("./routes/apiRoutes");
require("dotenv").config();

const app = express();
const port = process.env.PORT || 10000; // Dynamic port support

// ✅ Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// ✅ Static Files
app.use(express.static(path.join(__dirname, "public")));

// ✅ Views Engine Setup
app.set("views", path.join(__dirname, "../views"));
app.set("view engine", "ejs");

// ✅ Routes
app.get("/", (req, res) => res.render("index"));
app.use("/api", apiRoutes);

// ✅ Signup Route
app.post("/signup", async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const existingUser = await collection.findOne({ name });

    if (existingUser) return res.send("User already exists.");

    const hashedPassword = await bcrypt.hash(password, 10);
    await collection.create({ name, email, password: hashedPassword });
    res.send("User registered successfully.");
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
});

// ✅ Start Server
app.listen(port, () => console.log(`✅ Server running on Port: ${port}`));


