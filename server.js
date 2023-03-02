const express=require("express");
const cors=require("cors");
const dotenv=require("dotenv");
const { userRouter } = require("./Routes/User.route");
const { connection } = require("./Config/db");
dotenv.config();
const PORT=process.env.PORT || 7000;

var randomstring = require("randomstring");

const app=express();
app.use(cors());
app.use(express.json());

app.get("/",(req,res)=>{
    let length=Math.random()*9;
    let randomStr=randomstring.generate(length);
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
