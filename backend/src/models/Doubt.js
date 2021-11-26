const mongooses= require("mongoose");

const doubtschema= new mongooses.Schema({
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
doubtschema.methods.addMessage = async function(message){
    try {
        this.messages=this.messages.concat({message})
        await this.save();
        return this.messages
    

    }
    catch (err){
        console.log(err);
    }
}




const Doubt=mongooses.model('USERDOUBT',doubtschema)
module.exports =  Doubt;