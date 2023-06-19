const http=require('http');
const hostname='127.0.0.1';
const port=8000;

const server=http.createServer((req,res)=>{
    console.log(req.url);
    if(req.url=='/')
    {
        res.end('hello from the otherside');
    }
    else if(req.url=="/about")
    {
        res.end("hello from about side")
    }
    else if(req.url=="/contact")
    {
        res.end("hello from contact side");
    }
    else{
        res.writeHead(404, {"content-type": "text/html"})
        res.end("<h1>404 error page. page does not exit</h1>");
    }
});

server.listen(port,hostname,()=>{
    console.log(`listening at port no. ${port}`)
});