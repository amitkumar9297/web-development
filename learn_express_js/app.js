const express = require('express');
const app= express();

// app.get(route , callbacl)
// we create api with the help of express, inside there are some methods
// API
// get -->for read the data
// post-->for create the data
// put -->for update the data
// delete-> dor delete the data


app.get("/",(req,res)=>{
    res.send("hello world from the express");
});
app.get("/about",(req,res)=>{
    res.send("author Amit Kumar");
});

// the callback function has 2 parameterm, request(req) and response(res)
// the request object (req) represents the HTTP request and
// has property for request query string, parameter body,http header etc..

// similarly, the response object represent the http response that the express app send when receive http request

app.listen(8000,()=>{
    console.log("listening the port at 8000");
})
