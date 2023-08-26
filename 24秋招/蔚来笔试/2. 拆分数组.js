// 给定一个长度为n的数组，求有多少个数可以拆成3个大于1的数相乘？
// 当输入[1,2, 3, 4, 5, 6, 7, 8, 9]，输出1，因为只有8可以拆分成2*2*2

function countTripleMultiply(arr) {
  let count = 0
  for (let i = 0; i < arr.length; i++) {
    let num = arr[i]
    if (num < 8) {
      continue
    }
    if (canSplitIntoThreeFactors(num)) {
      console.log(num)
      count++
    }
  }
  return count
}

function canSplitIntoThreeFactors(num) {
  // 创建一个二维数组dp，dp[i][j]表示数i是否可以拆分成j个大于1的数相乘
  const dp = []
  for (let i = 0; i <= num; i++) {
    dp[i] = []
    for (let j = 0; j <= 3; j++) {
      dp[i][j] = false
    }
  }

  // 初始化dp数组的边界条件
  dp[2][1] = true
  dp[3][1] = false
  dp[4][1] = true
  dp[4][2] = true

  // 动态规划的状态转移过程
  for (let i = 5; i <= num; i++) {
    for (let j = 1; j <= 3; j++) {
      // 尝试将数i拆分成j个大于1的数相乘
      for (let k = 2; k < i; k++) {
        if (i % k === 0 && dp[i / k][j - 1]) {
          dp[i][j] = true
          break
        }
      }
    }
  }

  // 返回结果
  return dp[num][3]
}

function getPrimeFactors(num) {
  let factors = []
  for (let i = 2; i <= num; i++) {
    while (num % i === 0) {
      factors.push(i)
      num /= i
    }
  }
  return factors
}

// const n = parseInt(await readline())
// const nums = (await readline()).split(' ').map((item) => parseInt(item))
// const res = countTripleMultiply(nums)
// console.log(res)

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 16]
const result = countTripleMultiply(arr)
console.log(result) // 输出: 1

// console.log(canSplitIntoThreeNumbers(16))
