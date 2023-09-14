// 小美有一个由数字字符组成的字等串，现在她想对这个字符串进行一些修改。具体地，她可以将这个字符串中任意位置字符修改为任意的数字字符。她想知道，至少进行多少次修改，可以使得修改后的字符串不包含两个连相同的字符?

// 例如，对于字符串”111222333”。她可以进行3次格故将其变为”121212313”
// 用js实现一下这道题吧

function minModification(s) {
  let count = 0
  let last = ''
  for (let i = 0; i < s.length; i++) {
    if (s[i] === last) {
      count++
      s = s.substring(0, i) + getNextDifferent(last) + s.substring(i + 1)
    }
    last = s[i]
  }
  return count

  // 辅助函数：获取与指定字符不同的一个数字字符
  function getNextDifferent(c) {
    for (let i = 0; i < 10; i++) {
      let next = String(i)
      if (next !== c) {
        return next
      }
    }
  }
}

let str = '111222333'
let res = minModification(str)
console.log(res);
