// MODULE WRAPPER function 
// in node.js individual files known as modules
// when we run our program at the time node wrap our code with wrap function 
// like candy wrap inside plastic or metalic wrapper

// ( ) it's a grouping operator
/* 


( function(){

})

in grouping operator there is a anonymous function ,,,,,,,, whole is known as module wrapper

*/

( function(exports, require, module, __filename, __dirname)
{
    const name ="amit";
    console.log(name);
})();
console.log(__dirname);

// because of module wrapper function all variables and function define in our program become private
// it is also known as iife in advanced js (immediately invoked funcdtion expression)