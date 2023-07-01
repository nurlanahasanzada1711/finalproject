const mongoose = require('mongoose');

//About Model
const aboutModel = mongoose.model("Abouts", new mongoose.Schema({
    desc: String,
    about: String,
    imageURL: String,
    author: String
}));

module.exports = aboutModel