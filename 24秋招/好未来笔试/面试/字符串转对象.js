// 给出一个字符串'a,b,c,d'，和一个对象m{message:1}把它转成这种样式
// {
//   a:{
//     b:{
//       c:{
//         d:{
//           m:{
//             message: 1
//           }
//         }
//       }
//     }
//   }
// }

// 很简单，当时怎么就没想出来呢，其实跟数组扁平化是一个道理的

function foo1(keys, obj) {
  return keys.reduceRight((accumulator, key) => {
    const newObj = { [key]: accumulator }
    newObj
    return newObj
  }, obj)
}

function foo2(keys, obj) {
  if (keys.length === 0) {
    return obj
  }
  const key = keys.shift()
  const newObj = {}
  newObj[key] = foo2(keys, obj)
  return newObj
}

let str = 'a,b,c,d'
let obj = { message: 1 }
let keys = str.split(',')
const result = foo2(keys, obj)
console.log(result)
