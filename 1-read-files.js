const { readFILE } = require('fs')

console.log('started a first task')
//CHECK FILE PASTH!!!!
readFile('./content/first.txt', 'utf8',(err, result)=>{
if (err){
    console.log(err)
    return
}
console.log(result)
console.log('completed the first task')
})
console.log('starting the next task')