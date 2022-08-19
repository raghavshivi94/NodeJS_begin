const {readFileSync, writeFileSync } =require('fs');
console.log('start')
//read file
const first = readFileSync('./content/first.txt', 'utf8')
const second = readFileSync('./content/second.txt', 'utf8')

console.log(first, second)

//write file
writeFileSync('./content/resul-sync.txt', `Here is the result: ${first}, ${second}`,{flag:'a'})

//will only run once writeFileSync finishes
console.log('done with this one')
console.log('starting next now')


//so if writeFileSync takes too long next other lines will be hampered