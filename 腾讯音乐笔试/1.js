// 小红定义一个数组为“好数组”，当且仅当该数组满足以下条件：
// 1。数组仅由0，1，2三种元素组成。
// 2。数组相邻的元素不相等。
// 例如：[2,1,2,0,1]是好数组。
// 小红定义一个数组的“陡峭值“为该数组相邻元素的差的绝对值之和。例如，[2,1,2,0,1]的陡峭值为|2-1|+|1-2|+|2-0|+|0-1|=5。
// 小红想知道，长度为n的所有好数组的陡峭值之和是多少？由于答案过大，请对 10^9+7取模。

/**
 * 计算小红定义的好数组的陡峭值之和
 * @param {number} n 数组长度
 * @return {number} 好数组的陡峭值之和
 */
var steepSum = function (n) {
  // mod取值为10^9+7
  const mod = 1000000007
  let f = Array.from({ length: n + 1 }, () => new Array(3).fill(0))
  let n0 = Array.from({ length: n + 1 }, () => 0)
  let n1 = Array.from({ length: n + 1 }, () => 0)
  let n2 = Array.from({ length: n + 1 }, () => 0)
  for (let j = 0; j <= 2; j++) {
    f[1][j] = 0
    n0[1] = n1[1] = n2[1] = 1
  }
  for (let i = 2; i <= n; i++) {
    for (let j = 0; j <= 2; j++) {
      // 计算f[i][j]
      f[i][j] = 0
      for (let k = 0; k <= 2; k++) {
        if (j !== k && n0[i - 1] + n1[i - 1] + n2[i - 1] === n0[i - 2] + n1[i - 2] + n2[i - 2]) {
          f[i][j] = (f[i][j] + Math.abs(j - k) * (k === 0 ? n0[i - 1] : k === 1 ? n1[i - 1] : n2[i - 1])) % mod
        }
      }
    }
    // 计算n0[i], n1[i], n2[i]
    n0[i] = (n1[i - 1] + n2[i - 1]) % mod
    n1[i] = (n0[i - 1] + n2[i - 1]) % mod
    n2[i] = (n0[i - 1] + n1[i - 1]) % mod
  }
  let ans = 0
  for (let j = 0; j <= 2; j++) {
    ans = (ans + f[n][j]) % mod
  }
  return ans
}

steepSum(2)
