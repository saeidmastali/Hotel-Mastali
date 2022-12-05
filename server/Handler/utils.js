// function to create client
const creatClient = () =>{
    const { MongoClient } = require("mongodb");
    require('dotenv').config();
    const {MONGO_URI} = process.env;
    console.log(MONGO_URI);
    const options = {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      };

    return new MongoClient(MONGO_URI, options);
}

module.exports = {creatClient}