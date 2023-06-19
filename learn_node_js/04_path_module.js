// the path module to provide utilities for working with file and directory path, it can be accessed.
const path=require("path");

console.log("=> directory name ");
console.log(path.dirname('C:/Users/amit/programming/learn_node_js/04_path_module.js'));

console.log("=> extension name used in file");
console.log(path.extname('C:/Users/amit/programming/learn_node_js/04_path_module.js'));

console.log("=> basename used in file");
console.log(path.basename('C:/Users/amit/programming/learn_node_js/04_path_module.js'));

console.log("=> it give's every thing about path")
console.log(path.parse('C:/Users/amit/programming/learn_node_js/04_path_module.js'));

const mypath=path.parse('C:/Users/amit/programming/learn_node_js/04_path_module.js');

console.log("=> name of the file");
console.log(mypath.name);

console.log("=> path root name")
console.log(mypath.root);

// console.log(__filename)