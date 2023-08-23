// 原根，是一个数学符号。设m是正整数，a是整数，若a模m的阶等于φ(m)，则称a为模m的一个原根。
// 通俗一点的解释，对于一个素数p，令1＜=x＜p，若等式x^(p-1)=1(mod p)当且仅当指数为p-1的时候成立。则称x为p的一个原根。
// 现在给出一个素数p，请你求出它的原根有多少个。

// 判断一个数是否为素数
function isPrime(input) {
  if (input <= 1) {
    return false
  }
  for (let i = 2; i <= Math.sqrt(input); i++) {
    if (input % i === 0) {
      return false
    }
  }
  return true
}

// 找到一个素数的一个原根
function findRoot(num) {
  if (!isPrime(num)) {
    return -1
  }
  for (let i = 2; i < num; i++) {
    let isPrimitiveRoot = true
    for (let j = 1; j < num - 1; j++) {
      if (Math.pow(i, j) % num === 1) {
        isPrimitiveRoot = false
        break
      }
    }
    if (isPrimitiveRoot) {
      return i
    }
  }
  return -1
}

// 计算给定素数的原根数量
function countRoots(num) {
  if (!isPrime(num)) {
    return -1
  } else if (num === 2) {
    return 1
  }
  const primitiveRoot = findRoot(num)
  if (primitiveRoot === -1) {
    return -1
  }
  let count = 0
  for (let i = 1; i < num; i++) {
    if (gcd(i, num - 1) === 1) {
      count++
    }
  }
  return count
}

function gcd(a, b) {
  if (b === 0) {
    return a
  }
  return gcd(b, a % b)
}

let cnt = parseInt(readline())
for (let i = 0; i < cnt; i++) {
  const p = parseInt(readline())
  const res = countRoots(p)
  console.log(res)
}

// 测试代码
const nums = [2, 3, 5, 7]
nums.forEach((num) => {
  const primitiveRootCount = countRoots(num)
  console.log(`素数${num}的原根数量为${primitiveRootCount}`)
})
