const mongoose=require("mongoose");
const dotenv=require("dotenv");
dotenv.config();


const connection=mongoose.connect(process.env.MongoURL,{ useNewUrlParser: true, useUnifiedTopology: true })
.then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });

module.exports={connection}