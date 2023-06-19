// stream pipe here we learn pipe methods

const fs=require('fs');
const http=require('http');

const server=http.createServer();
const port=8000;
const hostName="127.0.0.1";

server.on("request",(req,res)=>{

    const rstream=fs.createReadStream('input.txt');
    rstream.pipe(res);
});
server.listen(port,hostName,()=>{
    console.log(`The port no is ${port} and host is ${hostName}`);
});

// server.listen(port,hostName)