const mongoose = require('mongoose');

//Contact Model
const contactsModel = mongoose.model("Contacts", new mongoose.Schema({
    desc: String,
    about:String,
    imageURL: String
}));

module.exports = contactsModel