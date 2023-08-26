//使用toLocaleString
// 缺陷：小数点有问题
// let num = -10000000
// num = num.toLocaleString()
// console.log(num)

// 正则表达式

// 使用js分隔符，从小数点前添加分隔符

const num = 123.6789
let str = num.toString()
let [str1, str2] = str.split('.')
console.log(str1, str2)
// 小数点前 str1， 小数点后 str2
let res = ''
while (str1.length > 3) {
  res = ',' + str1.slice(str1.length - 3, str1.length) + res
  str1 = str1.slice(0, str1.length - 3)
}
if (str1.length > 0) {
  res = str1 + res
}
console.log(res)

res = str2 ? res + '.' + str2 : res
console.log(res)

let str = readline()
const res = foo(res)
console.log(res)
function foo(input) {
  let [str1, str2] = str.split('.')
  let res = ''
  while (str1.length > 3) {
    res = ',' + str1.slice(str1.length - 3, str1.length) + res
    str1 = str1.slice(0, str1.length - 3)
  }
  if (str1.length > 0) {
    res = str1 + res
  }
  return res
}
