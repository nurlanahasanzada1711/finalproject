const mongoose = require('mongoose');

//Times Model
const timesModel = mongoose.model("Times", new mongoose.Schema({
    phone: String,
    hours:String,
    imageURL: String
}));

module.exports = timesModel