const mongoose=require("mongoose");
const dotenv=require("dotenv");
dotenv.config();


const connection=mongoose.connect(process.env.MongoURL,{ useNewUrlParser: true, useUnifiedTopology: true })

module.exports={connection}