const mongoose = require('mongoose');

//Services Model
const servicesModel = mongoose.model("Services", new mongoose.Schema({
    desc: String,
    about:String,
    imageURL: String
}));

module.exports = servicesModel