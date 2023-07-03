const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const dotenv = require('dotenv');
const numbers_router = require('./routes/numbers.routes');
const histories_router = require('./routes/history.routes');
const services_router = require('./routes/services.routes');
const times_router = require('./routes/times.routes');
const blogs_router = require('./routes/blogs.routes');
const abouts_router = require('./routes/about.routes');
const user_router = require('./routes/user.routes');
const team_router = require('./routes/team.routes');
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




// NUMBERS
app.use('/api/numbers/', numbers_router)

// HISTORIES
app.use('/api/histories/', histories_router)

// SERVICES
app.use('/api/services/', services_router)

// TIMES
app.use('/api/times/', times_router)

// BLOGS
app.use('/api/blogs/', blogs_router)

// ABOUT
app.use('/api/abouts/', abouts_router)

// USERS
app.use('/',user_router)

//TEAM
app.use('/api/teams/', team_router)











PORT  = process.env.PORT;
app.listen(PORT, () => {
    console.log(`NODE APP listening on port ${PORT}`);
});