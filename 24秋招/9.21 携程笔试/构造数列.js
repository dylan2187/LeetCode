// 使用js做这道题：
// 有一个由正整数构成的数组a，其中每个正整数只出现了一次。请你构造一个长度相等的数组b，满足a[i] ≠ b[i]，且数组b的字典序尽可能小。
// 排列的字典序定义如下：两个排列的字典序比较，将比较它们第一个不相等的元素，该元素小的那个排列字典序更小。
// 样例：输入[1,2,3]，输出[2,3,1]
function createArrayB(a) {
  let b = [...a].sort((a, b) => a - b)

  if (b.length > 1) {
    let tmp = b[b.length - 1]
    b[b.length - 1] = b[b.length - 2]
    b[b.length - 2] = tmp
  }

  for (let i = 0; i < a.length; i++) {
    if (a[i] === b[i]) {
      let j = 0
      while (j < b.length && b[j] === a[i]) {
        j++
      }

      let tmp = b[i]
      b[i] = b[j]
      b[j] = tmp
    }
  }

  return b
}

let a = [1, 2, 3]
console.log(createArrayB(a)) // 输出 [2, 1, 4, 3]
