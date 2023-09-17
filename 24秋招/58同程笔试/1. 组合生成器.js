// 编写一个 JavaScript 函数，实现组合生成器。给定两个整数m和n，返回由1 到m 中所有可能的n个数的组合。
// 例如：
// 输入：m=3， n=2
// 输出：[[1,2],[1, 3],[2,3]]
// 输入：m=3,n=3
// 输出：[[1,2,3]]
function combinations(m, n) {
  if (m < n || m <= 0 || n <= 0) {
    return []
  }

  const output = []
  const combination = []

  function generateCombinations(start) {
    if (combination.length == n) {
      output.push([...combination])
      return
    }

    for (let i = start; i <= m; i++) {
      combination.push(i)
      generateCombinations(i + 1)
      combination.pop()
    }
  }

  generateCombinations(1)
  return output
}

console.log(combinations(3, 2)) // [[1,2],[1,3],[2,3]]
console.log(combinations(3, 3)) // [[1,2,3]]
console.log(combinations(2, 3)) // []
console.log(combinations(0, 2)) // []
console.log(combinations(3, 0)) // []
console.log(combinations(-1, 2)) // []
console.log(combinations(3, -1)) // []
