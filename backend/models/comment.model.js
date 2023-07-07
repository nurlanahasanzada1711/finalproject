const mongoose = require('mongoose');

//Comment Model
const commentModel = mongoose.model("Comments", new mongoose.Schema({
    desc: String,
    about:String,
    imageURL: String
}));

module.exports = commentModel