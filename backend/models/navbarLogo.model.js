const mongoose = require('mongoose');

//Artist Model
const navbarLogoModel = mongoose.model("NavbarLogo", new mongoose.Schema({
    name: String,
    imageURL: String,
}));

module.exports = navbarLogoModel