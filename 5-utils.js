// CommonJS	- every file in node is a module by defualt
// Modules - Encapsulated Code and share what we want

const sayHi = (name) => {
    console.log('Hello there '+name)
}

module.exports = sayHi