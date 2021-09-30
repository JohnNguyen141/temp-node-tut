// npm - global command, comes with node test
// npm --version

// local dependency - use it only in this project
// npm - <packageNAME>

//Global dependency - use it in any project
//  npm install -g <packageName>
//sudo npm install -g <packageName> (mac)

// package.json - manifest file (store important info about project/package)
// manual approach - create package.json in the root, create properties etc)
// npm init - setp by step, press enter to skip
// npm init -y - every default

const lodashtest = require('lodash')

const items = [1, [2, [3, [4]]]]
const newItems = lodashtest.flattenDeep(items)
console.log(newItems)
