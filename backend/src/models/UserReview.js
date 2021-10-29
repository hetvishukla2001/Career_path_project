const mongooses= require("mongoose");

const userschemareview= new mongooses.Schema({
    username:{
        type:String,
        require:true
    },

    email:{
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
userschemareview.methods.addMessage = async function(message){
    try {
        this.messages=this.messages.concat({message})
        await this.save();
        return this.messages
    

    }
    catch (err){
        console.log(err);
    }
}




const UserReview=mongooses.model('USERREVIEW',userschemareview)
module.exports =  UserReview;