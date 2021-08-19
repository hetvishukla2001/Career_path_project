
const express=require("express");
const app=express();
const collection=require("./src/Mongo");
const port=process.env.PORT || 8000;

app.get("/",(req,res)=>{
    res.send("hellow adding show ")
})
app.post("/user",(req,res)=>{res.send("hellow adding ")})
app.listen(port,()=>{console.log(`error : ${port}`)})