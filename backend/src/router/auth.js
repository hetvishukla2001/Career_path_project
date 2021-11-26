const express=require("express");
const validator=require("validator")
const { model } = require("mongoose");
const router = express.Router();//router for backend
const bcrypt=require("bcryptjs");
const authenti = require("../middleware/authenti")
const User=require('../models/user');//get data from this file
const UserReview=require("../models/UserReview");
const Otp=require("../models/otp")
const cookieParser =require("cookie-parser");
const CollegeReview = require("../models/CollegeReview")
const Mailer= require("../mail/Mailer");
const Doubt = require("../models/Doubt");
router.use(cookieParser())
router.get("/",(req,res) => {
    res.send("home")
})
//if you want to save the data user writes in your database
//router.post is required

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
    else if(!validator.isEmail(email)){
        return res.status(422).json({error : "email not exists"})

    }
    else if(!validator.isMobilePhone(phone)){
        return res.status(422).json({error : "phone not exists"})

    }
    else {
    const users=new User({username,phone,password,cpassword,email,university,student})
     const userregister=await users.save();
     
    
        return res.status(201).json({message : "User registered "})
    }

    
    
}
catch(err){
   
    console.log(err)

}
  

})
//login route   
router.post("/signin",async (req,res)=>{
    
    try {
        let token;
        const {email,password}=req.body;
        if(!email || !password){
            return res.status(400).json({error : "Please fill the filed"})
        }
        const useremail= await User.findOne({email:email})//compare the email user entered with the emails in database
        
       
        if(!useremail){
            return res.status(400).json({error : " Email does not exit"})
        }
        const ismatch= await bcrypt.compare(password,useremail.password)
        if(!ismatch){
            return res.status(400).json({error : "Password is incorrect"})

        }
        else {
             token= await useremail.generateAuthToken();
             res.cookie("jwttoken",token,{
                 expires:new Date(Date.now()+23654102000),
                 httpOnly:true
             })
            res.json({message:"Sign in successfull"})
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
// our website review
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
router.get("/logout",authenti,async (req,res) => {
    console.log("hellow logout")
    res.clearCookie('jwttoken',{path : '/'})
    res.status(200).send("logout")
   
})
router.post("/forgot",async (req,res) => {
    try{
    const {email} = req.body;
    let data = await User.findOne({email})
    
    if(data){
        let otpcode=Math.floor((Math.random()*1000)+ 1)
        let otpdata=new Otp(
            {
                email:email,
                code:otpcode,
                expiredate: new Date().getTime() + 300 *1000
            }
        
        )
        let otpfinal= await otpdata.save();
        res.status(201).json({message:"send otp"})
        Mailer(email,otpcode);
        
    }
    else{
        res.status(400).json({err:"email not exits"})

    }

    
}
catch(err){
    console.log(err);
}
    
})
router.post("/changePassword",async (req,res) => {
    try{
        const {password,cpassword,email,otpcode}=req.body
    const data= await Otp.findOne({email,code:otpcode})
    

    if(data){

        let current=new Date().getTime();
        let diff=data.expiredate - current;
        if(!email || !otpcode || !password || !cpassword){
            res.status(400).json({err:"enter all fileds"})

        }
        else if(password != cpassword){
            res.status(400).json({err:"password not match"})

        }
        else if(diff < 0){
            res.status(400).json({err:"time expired try again!!"})

        }
        else {
            let user= await User.findOne({email:req.body.email})
            user.password=req.body.password;
            user.save();
            res.status(201).json({message:"password change successfully"})
            console.log("chnage")

        }
    }
    else{
        res.status(400).json({err:"invalid data"})
    }
    
    
    }
    catch(err){
        console.log(err)
    }
    
});
//review of college
router.post("/review", async (req,res) => {
   
    try {
        const {username,email,message,college}= req.body
        if( !username || !email  ){
            return res.status(400).json({err:"please login"})
        }
        if( !message || !college ){
            return res.status(422).json({err:"please fill all the fields"})
        }
    const useredit=await CollegeReview.findOne({
        collegename:college
    });
    if(useredit){
        const usermessage = await useredit.addMessage(message,username,email)
        await useredit.save();
        return res.status(201).json({message : "user register again"})
        
    }
    
    else {
        const users=new CollegeReview({collegename:college,username,email,messages:[{message:message,username:username,email:email}]})
       
        const userregister=await users.save();
     
    
        return res.status(201).json({message : "user register"})
    }

    
    
}
catch(err){
   
    console.log(err)

}});

router.post("/getreview",async(req,res) => {
    try {
        const {college}= req.body
        
        const collegere = await CollegeReview.find({
            collegename:college
        });
        
        
        res.send(collegere[0].messages);

    }
    catch(err){
        console.log(err)

    }
    
})

router.post("/getreviewall",async(req,res) => {
    try {
       
        
        const collegere = await CollegeReview.find();
        
        
        res.send(collegere);

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
router.post("/doubt", async (req,res) => {
   
    try {
        const {username,email,message}= req.body
        if( !username || !email || !message ){
            return res.status(422).json({err:"please fill all the fields"})
        }
    const useredit=await Doubt.findOne({
        email:email
    });
    if(useredit){
        const usermessage = await useredit.addMessage(message)
        await useredit.save();
        return res.status(201).json({message : "user register again"})
        
    }
    
    else {
        const users=new Doubt({username,email,messages:[{message:message}]})
       
        const userregister=await users.save();
     
    
        return res.status(201).json({message : "user register "})
    }

    
    
}
catch(err){
   
    console.log(err)

}});


module.exports=router;