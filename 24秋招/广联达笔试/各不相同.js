// 使用js做下面这道题：
// 输入两个正整数l,r，你需要找到一个正整数x，要求满足下面两个条件：
// l≤x≤r
// x中所有数位都不相同
// 如果有多个答案，输出最小的那一个。如果答案不存在，输出-1。
function findUniqueDigits(l, r) {
  for (let x = l; x <= r; x++) {
    const digits = x.toString().split('')
    const uniqueDigits = [...new Set(digits)]
    if (digits.length === uniqueDigits.length) {
      return x
    }
  }
  return -1
}

const n = parseInt(readline())
for (let i = 0; i < n; i++) {
  const [l, r] = readline()
    .split(' ')
    .map((item) => parseInt(item))
  const res = findUniqueDigits(l, r)
  console.log(res)
}

const res = findUniqueDigits(121, 223)
console.log(res)
