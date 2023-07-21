const mongoose= require("mongoose");
const validator=require("validator");

const studentSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
        minlength:3
    },
    email:{
        type:String,
        require:true,
        unique:[true,"E-mail Id already present"],
        validator(value){
            if(!validator.isEmail(value)){
                throw new Error("Invalid E-mail")
            }
        }
    },
    phone:{
        type:Number,
        maxlength:10,
        required:true,
        unique:[true,"ph.no already present "]
    },
    address:{
        type:String,
        required:true
    }
})

// we will create a new collection using models

const Student=new mongoose.model('Student',studentSchema);

module.exports=Student;