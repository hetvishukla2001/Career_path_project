const Mailer = async(email,otp)=> {
    try {
    var nodemailer=require("nodemailer");
    var transfer = await nodemailer.createTransport({
        service: 'gmail',
        port: 587,
        secure: false,
        auth :{
            user:process.env.EMAIL,
            pass:process.env.PASSWORD
        }
    });
    var mailOption= {
        from: process.env.EMAIL,
        to : email,
        subject: `Here your OTP code `,
        text:`${otp}`


    };
    await transfer.sendMail(mailOption,function(err,info){
        if(err){
            console.log("err occure "+err)
        }
        else {
            console.log("done")
        }
    })
    }
    catch(err){
        console.log(err);
    }


}
module.exports = Mailer;