const {readFile, writeFile} = require('fs')

readFile('./content/subfolder/first.txt','utf8',(err, result) => {
    if (err) {
        console.log(err)
        return
    }
    const first = result
    // console.log(first)

    readFile('./content/subfolder/second.txt','utf8',(err, result) => {
        if (err) {
            console.log(err)
            return
        }
        const second = result
        // console.log(second)

        writeFile('./content/subfolder/result.txt', 'There is the reuslt', (err, result) => {
            console.log("in call back")
            if (err) {
                console.log(err)
                return
            }
            // console.log(result)
        }
        )
    })
})
// console.log(first)
