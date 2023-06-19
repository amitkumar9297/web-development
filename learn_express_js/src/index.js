const path=require('path');
const express=require('express');
const app=express();
const hbs=require("hbs");
const port=8000;


//  there are two type of path 
// --> static
// --> dynamic
// we always use static path

staticPath=path.join(__dirname, "../public");
templatePath=path.join(__dirname,"../templates/views");
partialsPath=path.join(__dirname,"../templates/partials");

app.set("view engine","hbs");
app.set("views",templatePath);
hbs.registerPartials(partialsPath);

//  built in middleware
// app.use(express.static(staticpath));
app.use(express.static(templatePath));

app.get("/",(req, res)=>{
    // res.send("hello from the express server");
    res.render("index",{
        work:"task",
    })
});
app.get("*",(req,res)=>{
    res.render("404",{
        errorcomemnt:"Oops! page couldn't be found"
    });
});
app.listen(port,()=>{
    console.log(`listening at port no. ${port}`);
})

