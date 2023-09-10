// 使用js解决这些道题：
// 小红定义一个字符串的权值为：该字符串的极长连续段的数量。
// 所谓“极长连续段”，指一个尽可能长的连续子串，该子串所有字符都相等。
// 例如，'aabbaaa'的权值为3，因为有3个极长连续段：'aa'，'bb'， 'aaa'。
// 编写一个函数，输入字符串的长度n和字符串str，输出该字符串的极长连续段的数量

function countMaxContinuousSegments(n, str) {
  // 计算字符串的极长连续段的数量
  if (n <= 0) {
    return 0
  }

  let count = 1 // 至少有一个极长连续段
  for (let i = 1; i < n; i++) {
    if (str[i] !== str[i - 1]) {
      count += 1
    }
  }
  return count
}

const n = parseInt(await readline())
let str = await readline()
const cnt = parseInt(await readline())
for (let i = 0; i < cnt; i++) {
  let [index, char] = (await readline())
    .split(' ')
    .map((item) => parseInt(item))
  let arr = str.split('')
  arr[index - 1] = char
  str = arr.join('')
  const res = countMaxContinuousSegments(n, str)
  console.log(res)
}
const n = 7
let str = 'aabbaaa'
let arr = str.split('')
arr[0] = 'b'
str = arr.join('')
console.log(str)
const res = countMaxContinuousSegments(n, str)
console.log(res)
