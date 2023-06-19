const nodemailer = require("nodemailer");

const sendMail= async (req,res)=> {
    let testAccount = await nodemailer.createTestAccount();

    // connect with smtp server
    let transporter = nodemailer.createTransport({
        host: "smtp.ethereal.email",
        port: 587,
        // secure: false, // true for 465, false for other ports
        auth: {
            user: 'abigail.grant@ethereal.email',
            pass: 'xEZkq5uYSE9DJUjaQh'
        },
      });

      let info = await transporter.sendMail({
        from: '"Amit Kumar 👻" <amit@gmail.com>', // sender address
        to: "amitkumar790194@gmail.com", // list of receivers
        subject: "Hello Amit✔", // Subject line
        text: "Hello my dear friend amit", // plain text body
        html: "<b>Hello world?</b>", // html body
      });

      console.log("Message sent: %s", info.messageId);


    res.json(info);

};

module.exports=sendMail;