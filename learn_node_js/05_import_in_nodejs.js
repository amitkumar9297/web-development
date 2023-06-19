// const oper=require("./05_export_in_nodejs");
// console.log(oper.add(50,40));
// console.log(oper.sub(100,10));

// OR

const {add, sub, mul}=require("./05_export_in_nodejs");
console.log(add(40,50));
console.log(sub(100,10));
console.log(mul(10,9));