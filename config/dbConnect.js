const mongoose = require('mongoose');

const dbConnect = async () => {
    try {
        const connection = await mongoose.connect(process.env.MONGODB_URL);
        console.log("Connected To DataBase..");
    }
    catch (err) {
        console.log(err);
    }
}

module.exports = { dbConnect };