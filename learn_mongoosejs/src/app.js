const mongoose = require("mongoose");


// connection creation and cresting a new db
mongoose.connect("mongodb://127.0.0.1:27017/amit").then(() => { console.log("connect sucessfully....") }).catch((err) => { console.log(err) });

// schema
// a mongoose schema defines the structure  of the document,
// default values, validator,etc..,

/**
    validators:-

      string :-

        type        =>  kis tarah ka datatype enter krna hai eg-> Boolean,String,Number,Array,etc.,
        required    =>  jis field mein required lga hoga uusse fill krna mendatory hai, hmm ignore nahi kr sakte
        unique      =>  har kisi mein unique data hoga esss field ke related same nahi ho sakta
        lowercase   =>  jo bhi enter hoga uuse lowercase mein convert kr dega {{{{ ese ki tarah uppercase bhi hota hai}}}}
        trim        =>  string ke starting or ending mein jo space hai uuse remove kr deta hai
        minlength   =>  min kitne character required hai
        maxlength   =>  max to max kitne character ho sakte hai 
        enum        =>  Array, creates a validator that check if the value is in the given array.

        agar minlength yaa maxlength mein hmm array pass krte hai toh
        for eg--->>>
                minlength:[2,"minimum 2 letter"]
                    esmein 1 index pe present string tb return hoga jb error aayega ,,,,,,, jo error aayega wo length ke related hoga means ha size entered length se km ho.

      number:-

        min       =>
        max       =>
        enum      => esmein hmm ek array pass krte hai aur jo user hoga esi array mein present value ko enter kr sakta hai.
    
      date:-
        min=> date
        max=> date

*/

const playlistSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique:true,
        lowercase:true,
        trim:true,
        minlength:2,
        maxlength:30
    },
    ctype: {
        type:String,
        required:true,
        lowercase:true,
        enum:["front end","back end","data base"]
    },
    videos:{
        type:Number,
        // custom validation
        validate(value){
            if(value<0){
                throw new Error("videos count should not negative");
            }
        }
    },
    author: String,
    active: Boolean,
    date: {
        type: Date,
        default: Date.now
    }
});

// A Mongoose model is a wrapper on the Mongoose schema.
// A Mongoose schema defines the structure of the document,
// default values, validator,etc., whereas the mongoose model
// provides an interface to the data base for creating ,
// quering, updating, deleting records etc.,

// collection creation
const playlist = new mongoose.model("playlist", playlistSchema);

// create document or insert


const createDocument = async () => {


    try {
        const jsPlaylist = new playlist({
            name: "Javascript",
            ctype: "front end",
            videos: 150,
            author: "amit kumar",
            active: true
        })
        const mongoPlaylist = new playlist({
            name: "  Mongo  ",
            ctype: "data base",
            videos: 50,
            author: "amit kumar",
            active: true
        })
        const mongoosePlaylist = new playlist({
            name: "  mongoose",
            ctype: "data base",
            videos: 4,
            author: "amit kumar",
            active: true
        })
        const expressPlaylist = new playlist({
            name: " Express js",
            ctype: "backend end",
            videos: 20,
            author: "amit kumar",
            active: true
        })


        // const result= await reactPlaylist.save();
        // console.log(result);

        const result = await playlist.insertMany([jsPlaylist, mongoPlaylist, mongoosePlaylist, expressPlaylist]);
        console.log(result);
    }
    catch (error) {
        console.log(error);
    }
}

// createDocument();














/*
    here we have have some query operators
    like:-
    $eq     ->equalto
    $gt     ->greater than
    $gte    ->greater than equalto
    $lt     ->less than
    $lte    ->less than equal to
    $ne     ->not equal
    $in     ->for any value in array
    $nin    ->none in array

    syntax:-
    find({_ _ _ : {$_ _ : _ _}})

    for eg=>
    
    find({video: {$gt:50}})
*/

/*
    logical operators are:-

    $and
    $or
    $not
    $nor
*/

/*
    there are some methodes
    like:-
    select()
    find()
    limit()
    skip()
    countDocument()
    sort({_ _ _ : _ _})
            "_ _ _:1"   =>1 means acending order
            "_ _ _ :-1" =>-1 means decending order
*/
const readDocument = async () => {

    try {
        const result = await playlist
        // .find({videos:{$not:{$gt: 50}}})
        // .find({$and: [ {ctype:"backend end"},{author:"amit kumar"} ]})
        // .find({ctype:{$in:["backend end", "data base"]}})
        // .find({videos:{$gt : 50}})
        // .find({author:"amit kumar"})
        // .select({name:1})
        // .limit(1)
        // .countDocuments()
        // .sort({videos:1});

        console.log(result);
    }
    catch (err) {
        console.log(err);
    }
}


// readDocument();

















/*
    update operators are:-


        $currentDate        =>Sets the value of a field to current date, either as a Date or a Timestamp.

        $inc                =>Increments the value of the field by the specified amount.

        $min                =>Only updates the field if the specified value is less than the existing field value.

        $max                =>Only updates the field if the specified value is greater than the existing field value.

        $mul                =>Multiplies the value of the field by the specified amount.

        $rename             =>Renames a field.

        $set                =>Sets the value of a field in a document.

        $setOnInsert        =>Sets the value of a field if an update results in an insert of a document. Has no effect on update operations that modify existing documents.

        $unset              =>Removes the specified field from a document.


*/

const updateDocument = async (_id) => {
    try {
        // const result = await playlist.updateOne({ _id }, {
        //     $set: {
        //         ctype: "back end"
        //     }
        // });

        const result= await playlist.findByIdAndUpdate({_id},{$set:{
            name:"Express js"
        }},{
            new:true,
            useFindAndModify:false
        })

        console.log(result);
    }
    catch(err){
        console.log(err);
    }
}



// updateDocument("6495392d912758cb106de748");

















const deleteDocument=async (_id)=>{
    try{
        // const result=await playlist.deleteOne({_id});
        const result=await playlist.findByIdAndDelete({_id});
        console.log(result);
    }
    catch(err)
    {
        console.log(err);
    }
}



// deleteDocument("6495392d912758cb106de748");
