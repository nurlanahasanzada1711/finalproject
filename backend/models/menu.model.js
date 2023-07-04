const mongoose = require('mongoose');

//Menu Model
const menuModel = mongoose.model("Menus", new mongoose.Schema({
    price: String,
    desc:String,
    imageURL: String,
    dessert: String
}));

module.exports = menuModel