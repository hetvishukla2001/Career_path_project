const mongooses= require("mongoose");

const collegeschemareview= new mongooses.Schema({
    collegename:{
        type:String,
        require:true
    },

    
    messages :[
        {
            message:{
                type:String,
                require:true,
       

            },
            username:{
                type:String,
                require:true
            },
        
            email:{
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
collegeschemareview.methods.addMessage = async function(message,username,email){
    try {
        this.messages=this.messages.concat({message,username,email})
        await this.save();
        return this.messages
    

    }
    catch (err){
        console.log(err);
    }
}




const CollegeReview=mongooses.model('COLLEGEREVIEW',collegeschemareview)
module.exports =  CollegeReview;