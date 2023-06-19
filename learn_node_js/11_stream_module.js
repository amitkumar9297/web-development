/*

streams are objects that you read data from a source or write a data to a destination in continuous fashion.
in node.js there are four type of streams-

streaming means listening to music or watching video in "real time", instead of downloading a file to your computer and watching later

readable--> stream which is used for read operation
writable--> stream which is used for write operation
duplex--->  stream which can be used for both read and write operation
transform-> a type of duplex stream where the output is computed based on input

each type of stream is an eventEmitter instance and throws servel event of different instance of times.
for example=> some commonly events are--

data----> this event is fired when data is available for read 
end-----> this event is fired when no more data is available for read
error---> this event is fired when there is any error receiving or writing a data
finish--> this event is fired when all data has been flushed to unddrlying system 

*/


const fs=require('fs');
const http=require('http');

const server=http.createServer();
const port=3000;
const host='127.0.0.1';

// fs.writeFile("input.txt","hello whatsup guys! \n my name is Amit Kumar\n follow me for more on github\n and linkeddin also",()=>{});

server.on('request',(req,res)=>{
    // fs.readFile('input.txt',(err,data)=>{
    //     if(err) return console.log(err);
    //     res.end(data.toString());
    // });
    
    // NOTE====>>>THE ABOVE METHOD IS NOT A STREAMMING METHOD . IN ABOVE METHODE ENTIRE FILE IS LOAD .
    // NOW WE SEE STREAMMING 
    // rstream =readable stream


    const rstream=fs.createReadStream('input.txt');

    rstream.on('data',(chunkdata)=>{
        res.write(chunkdata);
    });
    rstream.on('end',()=>{
        res.end();
    });
    rstream.on('error',(err)=>{
        res.end("file not found");
    })
});



server.listen(port,host,()=>{
    console.log(`The port no is ${port} and host is ${host}`);
})