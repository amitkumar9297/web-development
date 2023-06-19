const os=require('os');
console.log(`=> architechture of os ${os.arch()}`);
console.log(`=> type of os ${os.type()}`);
console.log(`=> total memory in sysytem ${os.totalmem()/1024/1024/1024} GB`);
console.log(`=> total available memory in sysytem ${os.freemem()/1024/1024/1024} GB`);
console.log(`=> hostname ${os.hostname()}`);
console.log(`=> machine architecture on which os run ${os.machine()}`);

const cpu_info=os.cpus();
console.log(`=> cpu details`);
console.log(cpu_info);

const network_info=os.networkInterfaces();
console.log(`=> network information`);
console.log(network_info)

console.log("=> version of os")
console.log(os.version())

console.log("=> provide path where the temp file in the system")
console.log(os.tmpdir());