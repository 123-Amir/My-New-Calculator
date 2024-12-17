const mongoose = require("mongoose");
const connect = mongoose.connect("mongodb://0.0.0.0:27017/users");

//check database connected or not
connect.then(() => {
    console.log("Database connected Successfully");
})
.catch((error) => {
    console.log("Database not connected");   
});

//Create a schema
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

//collection Part
const collection = new mongoose.model("Collection1", LoginSchema);

//export module
module.exports = collection;