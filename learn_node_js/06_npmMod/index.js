const chalk = require('chalk');

console.log(chalk.blue('Hello world!'));
console.log(chalk.green.underline('hello world!'));
console.log("")
console.log(chalk.yellow.underline.inverse('hello world!'));

console.log(chalk.red.underline.inverse('false'));
console.log(chalk.green.underline.inverse('sucessful'));


// VALIDATOR 
// VALIDATOR is an e-mail

const validator=require("validator")
const result=validator.isEmail("amit790@gmail.com");
console.log(result?chalk.green.inverse(result):chalk.red.inverse(result));

// you can also check
// isMobile
// isUrl
// etc...
