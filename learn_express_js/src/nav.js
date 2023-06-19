const express=require("express");
const app=express()

port=8000;

app.get("/",(req,res)=>{
    res.write("<h1>hello fromhome side</h1>")
    res.send();
});
app.get("/about",(req, res)=>{
    res.send("hello from about side");
});
app.get("/contact", (req, res)=>{
    res.status(200).send("hello from contact side");
});

app.get("/temp",(req,res)=>{
    // now, serve an html and json data,file
    res.send([
        {
            id:1,
            name:"amit"
        },
        {
            id:2,
            name:"xyz"
        },
        {
            id:3,
            name:"abc"
        }
    ]);
});

// express automatically set status code

app.listen(port,()=>{
    console.log(`listening at port no. ${port}`);
})