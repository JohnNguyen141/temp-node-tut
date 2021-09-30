// CommonJS	- every file in node is a module by defualt
// Modules - Encapsulated Code and share what we want
const names = require('./4-names')
const sayHi = require('./5-utils')

sayHi('susasn')
sayHi(names.john)
sayHi(names.peter)