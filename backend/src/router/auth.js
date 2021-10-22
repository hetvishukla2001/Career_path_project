const express=require("express");
const { model } = require("mongoose");
const router = express.Router();
const User=require('../models/user');
router.get("/",(req,res) => {
    res.send("home")

})
router.post("/register", async (req,res) => {
    const {username,name,phone,password,cpassword,email,university,student}= req.body
    if( !username || !name ||  !phone || !password || !cpassword || !email || !university || !student ){
        return res.status(422).json({err:"please fill all the filed"})
    }
    try {
    const useredit=await User.findOne({
        email:email
    });
    if(useredit){
        return res.json({error : " email already exits"})
    }
    const users=new User({username,name,phone,password,cpassword,email,university,student})
    const register=await users.save();
    if(register){
        return res.status(201).json({message : "user register "})

    }
    
}
catch(err){
    console.log(err)

}
  

})

/*
router.post("/register",  (req,res) => {
    const {username,name,phone,password,cpassword,email,university,student}= req.body
    if( !username || !name ||  !phone || !password || !cpassword || !email || !university || !student ){
        return res.status(422).json({err:"please fill all the filed"})
    }
    User.findOne({
        email:email
    }).then((useredit) => {
        if(useredit){
            return res.json({error : " email already exits"})
        }
        const users=new User({username,name,phone,password,cpassword,email,university,student})
        users.save().then(()=>{
            return res.status(201).json({message : "user register "})
        }).catch((err)=>{
            return res.status(500).json({erro : err})
        })
    }).catch(err => { console.log(err)})
  

})
*/


module.exports=router;