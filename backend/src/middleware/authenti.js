const jwt = require("jsonwebtoken")
const User=require('../models/user');

const authenti = async (req,res,next) =>{
    try{
        
        const token= req.cookies.jwttoken;
        const verify = jwt.verify(token,process.env.SECRET_KEY)
        const root = await User.findOne({_id:verify._id,"tokens.token":token})
        if(!root){
            throw new Error("user not found")
        }
        req.token =token;
        req.rootToken = root;
        req.userid = root._id;
        next();

    }
    catch (err) {
        res.status(401).send("unauthoried")
        console.log(err);
    }

}
module.exports = authenti;