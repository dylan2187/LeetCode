// let inputs = ['L 1', 'G 2', 'L 3', 'L 4', 'G 5'] // 样例输入
// let inputs = ['G 6', 'L 5'] // 样例输入
// let n = inputs.length // 数据量

// let lCount = 0 // 记录 L ti 的数量
// let gCount = 0 // 记录 G ti 的数量

// for (let i = 0; i < n; i++) {
//   let time = parseInt(inputs[i].substring(2)) // ti
//   if (inputs[i].startsWith('L')) {
//     lCount++
//   } else {
//     gCount++
//   }
// }

// let errorCount = Math.min(lCount, gCount) // 取 L ti 和 G ti 数量的最小值

// console.log(errorCount)

const rl = require('readline').createInterface({ input: process.stdin })
var iter = rl[Symbol.asyncIterator]()
const readline = async () => (await iter.next()).value

void (async function () {
  // Write your code here
  let inputs = []
  line = await readline()
  let len = parseInt(line)
  for (let i = 0; i < len; i++) {
    line = await readline()
    inputs.push(line)
  }

  let n = inputs.length // 数据量

  let lCount = 0 // 记录 L ti 的数量
  let gCount = 0 // 记录 G ti 的数量

  for (let i = 0; i < n; i++) {
    let time = parseInt(inputs[i].substring(2)) // ti
    if (inputs[i].startsWith('L')) {
      lCount++
    } else {
      gCount++
    }
  }

  let errorCount = Math.min(lCount, gCount) // 取 L ti 和 G ti 数量的最小值

  console.log(errorCount)
})()
