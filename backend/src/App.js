const dotenv=require("dotenv");
const express=require("express");



const app=express();
dotenv.config({path: 'config.env' });
require("./db/conne")
const port=process.env.PORT || 5000;
const User=require('./models/user')//import model schema
app.use(express.json());//data is added in json format but our application doesn't understand json
//so above middleware is used so that the json format is converted into objects and used
app.use(require("./router/auth"))//we link the router files to make our route easy

const middleware =(req,res,next) => {
    console.log("hello");
    next();

}
//middleware();
if(process.env.NODE_ENV == "production"){
    app.use(express.static("frontend/build"));

}


app.listen(port,()=>{
    console.log(`server running  ${port}`)
});