const express=require("express");

const { model } = require("mongoose");
const router = express.Router();
const bcrypt=require("bcryptjs");
const authenti = require("../middleware/authenti")
const User=require('../models/user');
const UserReview=require("../models/UserReview");
const cookieParser =require("cookie-parser");
router.use(cookieParser())
router.get("/",(req,res) => {
    res.send("home")

})
router.post("/registers", async (req,res) => {
   
    try {
        const {username,phone,password,cpassword,email,university,student}= req.body
        if( !username ||   !phone || !password || !cpassword || !email || !university || !student ){
            return res.status(422).json({err:"please fill all the fields"})
        }
    const useredit=await User.findOne({
        email:email
    });
    if(useredit){
        return res.status(422).json({error : " email already exits"})
    }
    else if(password != cpassword){
        return res.status(422).json({error : "password not match"})

    }
    else {
    const users=new User({username,phone,password,cpassword,email,university,student})
     const userregister=await users.save();
     
    
        return res.status(201).json({message : "user register "})
    }

    
    
}
catch(err){
   
    console.log(err)

}
  

})
router.post("/signin",async (req,res)=>{
    
    try {
        let token;
        const {email,password}=req.body;
        if(!email || !password){
            return res.status(400).json({error : "please fill the filed"})
        }
        const useremail= await User.findOne({email:email})
        
       
        if(!useremail){
            return res.status(400).json({error : " email is not exits"})
        }
        const ismatch= await bcrypt.compare(password,useremail.password)
        if(!ismatch){
            return res.status(400).json({error : "password is incorrect"})

        }
        else {
             token= await useremail.generateAuthToken();
             res.cookie("jwttoken",token,{
                 expires:new Date(Date.now()+23654102000),
                 httpOnly:true
             })
            res.json({message:"sign in successfully"})
        }

    }
    catch(err){
        console.log(err);

    }


})
router.get("/profiles",authenti,(req,res) => {
    console.log("hello");
    res.send(req.rootToken);
})
router.get("/getdata",authenti,(req,res) => {
    
    res.send(req.rootToken);
})
router.post("/message", async (req,res) => {
   
    try {
        const {username,email,message}= req.body
        if( !username || !email || !message ){
            return res.status(422).json({err:"please fill all the fields"})
        }
    const useredit=await UserReview.findOne({
        email:email
    });
    if(useredit){
        const usermessage = await useredit.addMessage(message)
        await useredit.save();
        return res.status(201).json({message : "user register again"})
        
    }
    
    else {
        const users=new UserReview({username,email,messages:[{message:message}]})
       
        const userregister=await users.save();
     
    
        return res.status(201).json({message : "user register "})
    }

    
    
}
catch(err){
   
    console.log(err)

}});
router.get("/logout",authenti,(req,res) => {
    console.log("hellow logout")
    res.clearCookie('jwttoken',{path : '/'})
    res.status(200).send("logout")
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