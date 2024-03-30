const mongoose=require('mongoose');
const mongoURL="mongodb://localhost:27017/CollegeCommunity?directConnection=true&tls=false&readPreference=primary";

const connectToMongo = async () => {
    try {
        await mongoose.connect(mongoURL);
        console.log("Connected to Mongo Successfully");
    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
    }
};

module.exports = connectToMongo;

