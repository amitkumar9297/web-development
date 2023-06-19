const http =require('http');
const fs=require('fs');
var requests=require("requests");
const { hostname } = require('os');

const homeFile=fs.readFileSync("../app/index.html",'utf-8');

const port=8000;
const host='127.0.0.1';

const replaceVal=(tempVal, orgVal)=>{

    let K=orgVal.main.temp;
    let C = parseFloat(K - 273.15).toFixed(2);
    let temperature=tempVal.replace("{%tempval%}",C);

    K=orgVal.main.temp_min;
    C = parseFloat(K - 273.15).toFixed(2);
    temperature=temperature.replace("{%tempmin%}",C);

    K=orgVal.main.temp_max;
    C = parseFloat(K - 273.15).toFixed(2);
    temperature=temperature.replace("{%tempmax%}",C);

    temperature=temperature.replace("{%location%}",orgVal.name);
    temperature=temperature.replace("{%country%}",orgVal.sys.country);
    return temperature;
}

const server = http.createServer((req,res)=>{
    if(req.url=="/")
    {
        requests(`https://api.openweathermap.org/data/2.5/weather?lat=31.64&lon=74.88&appid=f4dc4ac509932489072739af08e32f66`)
        .on("data", (chunk) => {
            const objData=JSON.parse(chunk);
            const arrData=[objData];
            // console.log(arrData[0].main.temp);
            const realTimeData=arrData.map((val)=>replaceVal(homeFile,val)).join("");
            res.write(realTimeData);
        })
        .on("end", (err) => {
            if(err) return console.log("connection closed due to error", err);
            res.end();
        });

    }
});


server.listen(port,host);