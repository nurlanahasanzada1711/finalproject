const mongoose = require('mongoose');

//Products Model
const productsModel = mongoose.model("Products", new mongoose.Schema({
    desc: String,
    price:String,
    imageURL: String
}));

module.exports = productsModel