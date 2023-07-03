const mongoose = require('mongoose');

//Team Model
const teamModel = mongoose.model("Teams", new mongoose.Schema({
    chef: String,
    desc:String,
    imageURL: String
}));

module.exports = teamModel