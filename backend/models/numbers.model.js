const mongoose = require('mongoose');

//Numbers Model
const numbersModel = mongoose.model("Numbers", new mongoose.Schema({
    count: Number,
    desc: String,
}));

module.exports = numbersModel