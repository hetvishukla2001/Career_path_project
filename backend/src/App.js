const dotenv=require("dotenv");
const express=require("express");



const app=express();
dotenv.config({path: 'config.env' });
require("./db/conne")
const port=process.env.PORT;
const User=require('./models/user')
app.use(express.json());
app.use(require("./router/auth"))

const middleware =(req,res,next) => {
    console.log("hello");
    next();

}
//middleware();


app.listen(port,()=>{
    console.log(`server running  ${port}`)
});