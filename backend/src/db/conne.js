const mongoose=require("mongoose")
mongoose.connect("mongodb://localhost:27017/user_details",{ useNewUrlParser: true,useUnifiedTopology: true}).then(
    ()=> {console.log("successfully")}
).catch(
    (err)=>{console.log(`not done ${err}`)}
)