const express=require("express");
const router=new express.Router();

const MensRanking=require("../models/mens");



// we will handle post request
router.post("/mens",async (req,res)=>{
    try{
        const addMensRecord = new MensRanking(req.body);
        const result=await addMensRecord.save();
        res.status(201).send(result);

    }catch(err){
        res.status(400).send(err);
    }
})



// we will handling get req
router.get("/mens",async (req,res)=>{
    try{
        const getMens=await MensRanking.find().sort({"ranking":1});
        res.status(201).send(getMens);

    }catch(err){
        res.status(400).send(err);
    }
})



// we will handel get request for individual
router.get("/mens/:id",async (req,res)=>{
    try{
        const _id= req.params.id;
        const getMens=await MensRanking.findById(_id);
        res.status(201).send(getMens);

    }catch(err){
        res.status(400).send(err);
    }
})




// handling patch request in rest API
router.patch("/mens/:id",async (req,res)=>{
    try{
        const _id= req.params.id;
        const getMens=await MensRanking.findByIdAndUpdate(_id,req.body,{
            new:true,
            updateAndModify:false
        });
        res.status(201).send(getMens);

    }catch(err){
        res.status(500).send(err);
    }
})



// handling delete request for rest api
router.delete("/mens/:id",async (req,res)=>{
    try{
        const _id= req.params.id;
        const getMens=await MensRanking.findByIdAndDelete(_id);
        res.status(201).send(getMens);

    }catch(err){
        res.status(400).send(err);
    }
})

module.exports=router;