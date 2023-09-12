// 即将进入假期的小A打算做很多作业，因为小A每天的心情不同，所以他每天可以做的作业数量可能不同。聪明的小A知道一直做作业是对身体不好的，所以需要他给自己制订一份劳逸结合的假期作业计划，也就是在每次做作业后都需要休息1天或2天（不能不休息，也不能休息大于 2天），再继续做作业。

// 爱学习的小A决定在假期的第1天或第2天开始做作业，那么他在假期内最多能做多少作业？
function maxHomework(n, arr) {
  if (n <= 0) return 0
  let dp = new Array(n + 1).fill(0)
  dp[1] = arr[0]
  dp[2] = Math.max(arr[0], arr[1])

  for (let i = 3; i <= n; i++) {
    // 在第 i 天做作业或不做作业，看哪种情况下能完成的作业更多
    dp[i] = Math.max(dp[i - 2] + arr[i - 1], dp[i - 3] + arr[i - 1])
  }

  return dp[n]
}

let n = parseInt(readline())

let arr = readline()
  .split(' ')
  .map((item) => parseInt(item))
const res = maxHomework(n, arr)
console.log(res)

let n = 11 // 假期天数
let arr = [1, 3, 2, 4, 7, 9, 3, 5, 8, 6, 4] // 每天能完成的作业数

n = 5
arr = [2, 1, 2, 1, 2]

console.log(maxHomework(n, arr)) // 输出最多能完成的作业数
