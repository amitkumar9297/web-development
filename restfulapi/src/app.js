require("./db/conn");

const express= require("express");
const app= express();

const Student=require("./models/students");
const studentRouter=require("./routers/student");

const port= process.env.PORT||8000;

app.use(express.json());
app.use(studentRouter);





// Create a new student


// app.post("/students",(req,res)=>{

//     console.log(req.body);

//     const user= new Student(req.body);

//     user.save().then(()=>{
//         res.status(201).send(user);
//     }).catch((err)=>{
//         res.status(400).send(err);
//     });

//     // res.send("helllo from the other side");
// });



// create student data
app.post("/students",async (req,res)=>{
    
    try{
        const user=new Student(req.body);
        const createUser=await user.save();
        res.status(201).send(createUser);
    }catch(e){
        res.status(400).send(e);
    }
});

// for all students data
app.get("/students",async (req,res)=>{
    try{
        const result= await Student.find();
        res.status(201).send(result)

    }catch(err){
        res.status(404).send(err);
    }
})

// for only one student
app.get("/students/:id",async(req,res)=>{
    try{
        const _id=req.params.id;
        const result=await Student.findById(_id);
        if(!result)
        {
            return res.status(404).send();
        }
        else{
            res.status(201).send(result);
        }
    }catch(err){
        res.status(500).send(err);
    }
})

// update the students by its id

app.patch("/students/:id",async(req,res)=>{
    try{
        const _id=req.params.id;
        const result= await Student.findByIdAndUpdate(_id,req.body,{
            new:true,
            useFindAndModify:false
        });
        res.status(201).send(result);
    }catch(err){
        res.status(500).send(err);
    }
})

// delete the students data by it's id

app.delete("/students/:id",async(req,res)=>{
    try{
        const _id=req.params.id;
        const result=await Student.findByIdAndDelete(_id);
        if(!_id){
            return res.status(404).send();
        }
        else{

            res.status(201).send(result);
        }
    }catch(err){
        res.status(500).send(err);
    }
})

// app.get app.post app.delete app.patch 
// iske jagah hmm
// router.get router.post router.delete router.patch bhi kr sakte hai
// 
// iske liye 3 step foolow krne padeinge 
// steps are --->>>
/*
    1st 
        const router = new express.Router()
    2nd
        router.get("/",()=>{})

    3rd
        express ko batana padega hm router use kr rahein hai oske liye

        app.use(router)
*/

app.listen(port,()=>{
    console.log(`connection is setup at ${port}`);
});