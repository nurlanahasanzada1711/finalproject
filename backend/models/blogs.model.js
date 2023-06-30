const mongoose = require('mongoose');

//Blogs Model
const blogsModel = mongoose.model("Blogs", new mongoose.Schema({
    desc: String,
    about: String,
    imageURL: String,
    admin: String
}));

module.exports = blogsModel