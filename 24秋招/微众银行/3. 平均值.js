function numberOfSubarrays(array, u, v) {
  let sumArray = new Array(array.length + 1).fill(0)
  let hashMap = new Map()
  let count = 0

  hashMap.set(0, 1)
  for (let i = 1; i <= array.length; i++) {
    sumArray[i] = sumArray[i - 1] + array[i - 1] - u / v
    if (hashMap.has(sumArray[i])) {
      count += hashMap.get(sumArray[i])
    }
    hashMap.set(sumArray[i], (hashMap.get(sumArray[i]) || 0) + 1)
  }

  return count
}

function countSubarrays(array, u, v) {
  let count = 0
  let n = array.length
  let prefixSum = Array(n + 1).fill(0)
  let average = u / v

  // 构建前缀和数组
  for (let i = 1; i <= n; i++) {
    prefixSum[i] = prefixSum[i - 1] + array[i - 1]
  }

  // 遍历所有可能的子区间
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j <= n; j++) {
      let sum = prefixSum[j] - prefixSum[i]
      let len = j - i
      if (sum / len === average) {
        count++
      }
    }
  }

  return count
}

// let [n, u, v] = readline()
//   .split(' ')
//   .map((item) => parseInt(item))
// let arr = readline()
//   .split(' ')
//   .map((item) => parseInt(item))

// const res = countSubarrays(arr, u, v)
// console.log(res)

let n = 6
let u = 5
let v = 2
let arr = [2, 4, 1, 3, 2, 3]

const res = countSubarrays(arr, u, v)
console.log(res)
