const express=require("express");
const cors=require("cors");
const dotenv=require("dotenv");
const { userRouter } = require("./Routes/User.route");
const { connection } = require("./Config/db");
var randomstring = require("randomstring");
dotenv.config();
const PORT=process.env.PORT || 7000;



const app=express();
app.use(cors({origin:"*"}));
app.use(express.json());

app.get("/",(req,res)=>{
    let randomstring = require("randomstring");
    let length=Math.random()*9;
    let randomStr=randomstring.generate({
        length,
        charset: 'alphabetic',
        capitalization: 'uppercase'
      });
    res.send({"msg":"Welcome To Masai Word Game API","res":randomStr})
})

app.use("/user",userRouter)

app.listen(PORT,async()=>{
    try {
        await connection;
        console.log("Connected 2 DB");
    } catch (error) {
        console.log(error)
    }
    console.log(`Listening to Port ${PORT}`);
})
