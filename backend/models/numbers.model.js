const mongoose = require('mongoose');

//Artist Model
const numbersModel = mongoose.model("Numbers", new mongoose.Schema({
    count: Number,
    desc: String,
}));

module.exports = numbersModel