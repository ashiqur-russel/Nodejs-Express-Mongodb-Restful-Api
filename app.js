const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors")
require('dotenv/config')
app.use(bodyParser.json());
app.use(cors());

//Import routes

const postRoute = require('./routes/post')
//Midlleware
app.use('/posts', postRoute);

//Routes
app.get('/', (req, res) => {
    res.send("We are on home");
})


//Connect to db
mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true }, () => {
    console.log("connected to db");
})

app.listen(3000, () => {
    console.log("Server listenig on port")
})