const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const dotenv = require('dotenv');
const navbarLogo_router = require('./routes/navbarLogo.routes');
const numbers_router = require('./routes/numbers.routes');
const mongoose = require('mongoose');

dotenv.config();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());


//MONGO DATABASE CONNECTION
DB_CONNECTION = process.env.DB_CONNECTION
DB_PASSWORD = process.env.DB_PASSWORD
mongoose.connect(DB_CONNECTION.replace("<password>",DB_PASSWORD))
.then(()=> console.log("Mongo DB Connected!"))


//NAVBARLOGO
app.use('/api/navbarLogos/', navbarLogo_router)

// NUMBERS
app.use('/api/numbers/', numbers_router)




PORT  = process.env.PORT;
app.listen(PORT, () => {
    console.log(`NODE APP listening on port ${PORT}`);
});