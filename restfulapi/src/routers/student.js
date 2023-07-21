const express = require("express");
const router=new express.Router();

// 2. we need to define the router
router.get("/amit",(req,res)=>{
    res.send("hello whatsup guys");
});

module.exports=router;