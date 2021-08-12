const mongo=require("mongoose");
//connection the database if exsist and if not create new one
mongo.connect("mongodb://localhost:27017/user_details",{ useNewUrlParser: true,useUnifiedTopology: true }).then(
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
            require:true
        },
        password:{
            type:String,
            require:true
        },
        email:{
            type:String,
            require:true
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
const collection= new mongo.model("UserDetail",
{
    username:{
        type:String,
        require:true
    },
    name:{
        type:String,
        require:true
    },
    password:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true
    },
    university:String,
    student:Boolean,
    date:{
        type:Date,
        default:Date.now,
        require:true

    }
}
)
const createDocument=async() => {
    try{
    const reactlist=new collection( {
        username:"hetviMshukla",
        name:"hetvi",
        password:"hetvi@123",
        email:"hetvishukla2001@gmail.com",
        university:"MSU",
        student:true,
        
    })
     const result=await reactlist.save();
}
catch(error){

}

}
createDocument();