
const mongoose=require("mongoose");


const db=process.env.DATABASE;
mongoose.connect(db,{ useNewUrlParser: true,
    useUnifiedTopology: true}).then(
    ()=> {console.log("successfully")}
).catch(
    (err)=>{console.log(`not done ${err}`)}
)