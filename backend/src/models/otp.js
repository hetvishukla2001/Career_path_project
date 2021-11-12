const mongooses= require("mongoose");

const otpschema= new mongooses.Schema({
    

    email:{
        type:String,
        require:true,
    },
    code:{
        type:String,
        require:true
    },
    
    expiredate:{
                type:Number,
                
        
    }
       
    
})
const Otp=mongooses.model('otp',otpschema)
module.exports =  Otp;