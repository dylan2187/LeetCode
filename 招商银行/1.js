function countCuttingWays(len, colors) {
  let maxWays = 0
  let subArr = getAllSubarrays(colors)
  console.log(subArr)
  for (let item of subArr) {
    if (checkArray(item)) {
      maxWays++
    }
  }
  return maxWays
}

function checkArray(arr) {
  if (arr[0] === arr[arr.length - 1]) {
    return false
  }
  for (let i = 1; i < arr.length - 1; i++) {
    if (arr[i] === arr[0] || arr[i] === arr[arr.length - 1]) {
      return false
    }
  }
  return true
}

function getAllSubarrays(arr) {
  const result = []
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j <= arr.length; j++) {
      result.push(arr.slice(i, j))
    }
  }
  return result.filter((subarray) => subarray.length >= 2)
}

// 使用示例
const length = 7
const colors = [1, 2, 3, 4, 3, 2, 5]
let res = countCuttingWays(length, colors)
console.log(res)

const rl = require('readline').createInterface({ input: process.stdin })
var iter = rl[Symbol.asyncIterator]()
const readline = async () => (await iter.next()).value

void (async function () {
  // Write your code here
  line = await readline()
  var length = parseInt(line)
  line = await readline()
  var colors = line.split(' ').map((item) => Number(item))
  let res = countCuttingWays(length, colors)
  console.log(res)
})()
