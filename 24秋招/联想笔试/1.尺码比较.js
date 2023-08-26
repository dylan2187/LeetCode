function extractNumbers(str) {
  const res = str.match(/\d+/g)
  if (res === null) return 0
  return res
}
function countX(str) {
  var count = str.split('X').length - 1
  return count
}

function calc(num, cnt, cntX) {
  if (cnt !== 0) {
    return Math.pow(num, cnt)
  } else if (cntX !== 0) {
    return Math.pow(num, cntX)
  } else {
    return num
  }
}

function size2num(str) {
  if (str.includes('S')) {
    return 0.1
  } else if (str.includes('M')) {
    return 1
  } else if (str.includes('L')) {
    return 10
  }
}
function compareSize(str1, str2) {
  let num1 = size2num(str1) //S M L
  let num2 = size2num(str2)

  const cnt1 = extractNumbers(str1) //提取数字
  const cnt2 = extractNumbers(str2)

  const cntX1 = countX(str1) //提取X的个数
  const cntX2 = countX(str2) //提取X的个数
  const sum1 = calc(num1, cnt1, cntX1)
  const sum2 = calc(num2, cnt2, cntX2)
  if (sum1 > sum2) {
    console.log('Bigger')
  } else if (sum1 < sum2) {
    console.log('Smaller')
  } else {
    console.log('Equal')
  }
}

const n = parseInt(readline())
for (let i = 0; i < n; i++) {
  let [str1, str2] = readline().split(' ')
  compareSize(str1, str2)
}
