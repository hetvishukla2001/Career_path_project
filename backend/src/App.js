const express=require("express");
require("./db/conne")
const app=express();
const port=process.env.PORT || 5000;
app.get("/",(req,res)=> {
    res.send("hello");

})
app.listen(port,()=>{
    console.log(`server running  ${port}`)
});