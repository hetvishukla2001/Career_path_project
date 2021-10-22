const mongooses= require("mongoose");
const userschema= new mongooses.Schema({
    username:{
        type:String,
        require:true
    },

    name:{
        type:String,
        require:true,
    },
    phone:{
        type:String,
        require:true

    },
    password:{
        type:String,
        require:true
    },
    cpassword:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true,
       
    },
    university:String,
    student:Boolean,
    date:{
        type:Date,
        default:Date.now,
        require:true

    }
})

const User=mongooses.model('USER',userschema)
module.exports =  User;