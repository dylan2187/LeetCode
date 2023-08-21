// 有一个数组a，请构造一个数组b满足：
// 1. b的每一位都和a的对应位置不同
// 2. b的所有元素之和与a所有元素之和相同
// 3. b的数组均为正整数
// 有多少种构造方式。答案对10^9+7取模
function countConstructionWays(a) {
  const mod = 1000000007

  // 计算数组 a 的元素之和
  const sumA = a.reduce((sum, num) => sum + num, 0)

  // 计算可能的最大元素值
  const maxNum = Math.floor(sumA / a.length) + 1

  // 构造一个数组 b，初始化为全零
  const b = new Array(a.length).fill(0)

  // 用于统计每个数字出现的次数
  const count = new Array(maxNum + 1).fill(0)

  // 遍历数组 a，统计每个数字出现的次数
  for (let i = 0; i < a.length; i++) {
    count[a[i]]++
  }

  let result = 1

  // 遍历数组 a，计算答案
  for (let i = 0; i < a.length; i++) {
    // 计算每个位置上的可能取值个数
    const possibilities = (sumA - a[i]) % (a.length - 1)

    // 更新结果，乘以可能取值个数
    result = (result * possibilities) % mod

    // 更新数组 b
    for (let j = 1; j <= maxNum; j++) {
      if (count[j] === 0) {
        b[i] = j
        count[j]++
        break
      }
    }
  }

  return result
}

// 示例用法
const a = [1, 1, 3]
const ways = countConstructionWays(a)
console.log(ways)

// let n = parseInt(await readline())
// let arr = (await readline()).split(' ').map((item) => parseInt(item))
// const result = countConstructWays(arr)
// console.log(result)
