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
    messages :[
        {
            message:{
                type:String,
                require:true,
       

            },
            date:{
                type:Date,
                default:Date.now,
                require:true
        
            }
        }
    ] 
    
})
userschema.methods.addMessage = async function(message){
    try {
        this.messages=this.messages.concate({message})
        await this.save();
        return this.messages
    

    }
    catch (err){
        console.log(err);
    }
}




const UserReview=mongooses.model('USERREVIEW',userschema)
module.exports =  UserReview;