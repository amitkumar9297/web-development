const express = require("express");
const app=express();
const sendMail=require('./controllers/sendMail');

const port=5000;

app.get("/", (req,res)=>{
    res.send('I am a server');
});

app.get("/mail",sendMail);    // "sendemail":unknown word.
const start = async () => {
    try{
        app.listen(port,()=>{
            console.log(`I am live in port no. ${port}`);
        });
    }
    catch (error) {}
};

start();