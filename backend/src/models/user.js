const mongooses= require("mongoose");
const bcrypt=require("bcryptjs");
const jwt=require("jsonwebtoken");
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
    tokens :[
        {
            token:{
                type:String,
                require:true,
       

            }
        }
    ],  
    date:{
        type:Date,
        default:Date.now,
        require:true

    }
})




userschema.pre("save", async function (next){
 
   if( this.isModified("password")){
    
       this.password =await  bcrypt.hash(this.password,12);
       this.cpassword =await bcrypt.hash(this.cpassword,12);
       
   }
   next();

})

// token 
userschema.methods.generateAuthToken = async function(){
    try {
        let token = jwt.sign({_id:this._id},process.env.SECRET_KEY);
        this.tokens = this.tokens.concat({token:token});
        await this.save();
        return token;

    }
    catch (err){
        console.log(err);
    }
}

const User=mongooses.model('USER',userschema)
module.exports =  User;