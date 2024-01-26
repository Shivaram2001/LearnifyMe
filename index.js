require("dotenv").config();

// External imports
const express = require("express");
const app = express();
const bodyParser = require("body-parser");

// Internal imports
const { dbConnect } = require("./config/dbConnect");
const { logger } = require("./utils/logger");

const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));



app.listen(PORT, () => {
    try {
        console.log(`Sever running at port http://localhost:${PORT}..`);
        dbConnect();
    }
    catch (err) {
        console.log(err)
    }
})