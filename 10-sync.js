const {readFileSync, writeFileSync} = require('fs')

const first = readFileSync('./content/subfolder/first.txt','utf8')
const second = readFileSync('./content/subfolder/second.txt','utf8')
// console.log(first)

writeFileSync('./content/subfolder/writeresult.txt','In put texts: '+first+", "+second)