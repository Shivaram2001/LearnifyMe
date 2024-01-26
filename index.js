require("dotenv").config();
const PORT = process.env.PORT || 5000;

// External imports
const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const cors = require("cors");

// Internal imports
const { dbConnect } = require("./config/dbConnect");
const { handleError, notFound } = require("./middlewares/errorHandler");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}));
app.use(cookieParser());

//ROUTES


app.use(notFound);
app.use(handleError);

app.listen(PORT, () => {
    try {
        console.log(`Sever running at port http://localhost:${PORT}..`);
        dbConnect();
    }
    catch (err) {
        console.log(err)
    }
})