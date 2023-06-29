const mongoose = require('mongoose');

//History Model
const historiesModel = mongoose.model("Histories", new mongoose.Schema({
    desc: String,
    about:String,
    imageURL: String
}));

module.exports = historiesModel