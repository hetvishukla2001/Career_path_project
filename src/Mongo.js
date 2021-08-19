

const mongo=require("mongoose");
const validator=require("validator");
//connection the database if exsist and if not create new one
mongo.connect("mongodb://localhost:27017/user_details",{ useNewUrlParser: true,useUnifiedTopology: true,useCreateIndex: true }).then(
    ()=> {console.log("successfully")}
).catch(
    ()=>{console.log("not done")}
)
const list=new mongo.Schema(
    {
        username:{
            type:String,
            require:true
        },
        name:{
            type:String,
            require:true,
        },
        password:{
            type:String,
            require:true
        },
        email:{
            type:String,
            require:true,
            unique:[true,"email already exist"],
            validate(value){
                if(validator.isEmail(value)){
                    throw new Error("Email is valid");
                }
            }
        },
        university:String,
        student:Boolean,
        date:{
            type:Date,
            default:Date.now,
            require:true

        }
    }
);
const collection= new mongo.model("UserDetail",list)
/*const createDocument=async() => {
    try{
    const reactlist=new collection( {
        username:"hetv",
        name:"hetvi",
        password:"hetvi10@gamil.com",
        email:"hetvishom",
        university:"MSU",
        student:true,
        
    })
     const result=await reactlist.save();
}
catch(error){
console.log(error);
}

}
createDocument();
*/
module.exports= collection;