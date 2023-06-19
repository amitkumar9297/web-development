const fs = require('fs')
const bioData={
    name:"amit",
    age:21,
    ug:"b.tech cse from Gndu"
};

// console.log(bioData);

// convert JSON TO OBJECT

const jsonData=JSON.stringify(bioData);
console.log(jsonData);


// create json file
fs.writeFile('json1.json',jsonData,  (err)=>{
    console.log('done')
});

// read json file
fs.readFile("json1.json", "utf-8", (err, data)=>{
    const orgData=JSON.parse(data)
    console.log(orgData);
});

// console.log(jsonData.ug);

// const  parsedData=JSON.parse(jsonData);
// console.log(parsedData)