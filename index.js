const express = require('express'); 
const { path } = require('express/lib/application');
const app=express();
const PORT=process.env.PORT||5000;
const nodemailer = require("nodemailer");

app.use(express.static('public'))

// app.get('/', (request, response) => {
//     // The string we want to display on http://localhost:3000
//     response.send('<h1 style="font-family:Malgun Gothic;color:red;text-align:center;margin-top:250px">     Welcome to coding competition #2 by PALLAVI-Norka FSD B3</h1>')
//   })
app.listen(PORT,()=>{
    console.log(`Server Ready on port  ${PORT}`);
    });

  app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
  
  });
  app.get('/home.html', (req, res) => {
    res.sendFile(__dirname + '/home.html');
  
  });
  app.get("/mailer", (req, res) => {
    const email=req.query.email;
    console.log(`email : ${email}`);
  
  
    

    // async..await is not allowed in global scope, must use a wrapper
    async function main() {
      
    
      // create reusable transporter object using the default SMTP transport
      let transporter = nodemailer.createTransport({
        
        service:"gmail",
        secure: false, 
        auth: {
          user: "kareepadathpal@gmail.com", // generated ethereal user
          pass: "kareepadath1990", // generated ethereal password
        },
      });
    
      // send mail with defined transport object
      let info = await transporter.sendMail({
        from: "kareepadathpal@gmail.com", // sender address
        to: email, // list of receivers
        subject: "Hello ✔", // Subject line
        text: "Hello world?", // plain text body
        html: "<b>Hello world?</b>", // html body
      },function(err,info)
{
    if(err){
        
        res.send('<h1 style="font-family:Malgun Gothic;color:red;text-align:center;margin-top:250px"> Email Sending Failed</h1>');
    }
    else
    {
        res.send('<h1 style="font-family:Malgun Gothic;color:red;text-align:center;margin-top:250px">     Email sent Successfully</h1>');
        
    }
}  );
    }
main().catch(console.error);
    })  
      