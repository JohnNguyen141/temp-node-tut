// CommonJS	- every file in node is a module by defualt
// Modules - Encapsulated Code and share what we want
const os = require('os')

//info about current user
const user = os.userInfo()
console.log(user)

console.log('Uptime is '+os.uptime())
const curretOS = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem(),
}
console.log(curretOS)