// JSON.stringify(value[, replacer[, space]])

const data = [1, 2, 'three', true, { name: 'John', age: 30 }]
const jsonString = JSON.stringify(data)
typeof jsonString
console.log(jsonString)

let data1 = JSON.parse(jsonString)
Object.prototype.toString.call(data1)
// 输出：'[1,2,"three",true,{"name":"John","age":30}]'
