// 小红有一个字符串，她可以进行以下操作：
// 拆分。把'w'拆成2个'v'，'m'拆成2个'n'。
// 轴对称。把'b'轴对称成'd'，'p'轴对称成'q'，反之亦然。
// 翻转。把'b'翻转成'q'，把'd'翻转成'p'，把'n'翻转成'u'，反之亦然。
// 经过若干次操作后，小红想知道这个字符串能不能变成回文串。
// 比如说'wovv' , 'bod', 'moom'这些都是回文串
function isPalindrome(str) {
  const symmetricChars = {
    b: 'd',
    d: 'b',
    p: 'q',
    q: 'p',
    n: 'u',
    u: 'n',
  }

  const reverseChars = {
    b: 'q',
    d: 'p',
    p: 'd',
    q: 'b',
    n: 'u',
    u: 'n',
  }
  const splitChars = {
    w: 'vv',
    m: 'nn',
  }

  let left = 0
  let right = str.length - 1

  while (left <= right) {
    if (str[left] === str[right]) {
      left++
      right--
    } else if (symmetricChars[str[left]] === str[right]) {
      left++
      right--
    } else if (reverseChars[str[left]] === str[right]) {
      left++
      right--
    } else if (Object.keys(splitChars).includes(str[left])) {
      const temp = splitChars[str[left]]
      str = str.substring(1)
      str = temp + str
      right++
      console.log(str, left, right)
    } else if (Object.keys(splitChars).includes(str[right])) {
      const temp = splitChars[str[right]]
      str = str.slice(0, -1)
      str = str + temp
      right++
      console.log(str, left, right)
    } else {
      return false
    }
  }

  return true
}

let l1 = readline()
let n = parseInt(l1)
for (let i = 0; i < n; i++) {
  let l2 = readline()
  const res = isPalindrome(l2)
  console.log(res ? 'YES' : 'NO')
}

// 测试例子
console.log(isPalindrome('wovv')) // true
console.log(isPalindrome('bod')) // true
console.log(isPalindrome('pdd')) // true
console.log(isPalindrome('moom')) // true
console.log(isPalindrome('test')) // false
console.log(isPalindrome('wow')) // false
console.log(isPalindrome('mpodmnn')) // false
