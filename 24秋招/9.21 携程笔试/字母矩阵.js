// 有一个n行m列的字母矩阵，矩阵中所有字符都是小写字母。
// 想知道有多少个子矩阵满足，每个字母最多出现一次？
// 横向和纵向都可以
function countUniqueSubmatrices(matrix) {
  let count = 0
  const n = matrix.length
  const m = matrix[0].length

  for (let x1 = 0; x1 < n; x1++) {
    for (let y1 = 0; y1 < m; y1++) {
      for (let x2 = x1; x2 < n; x2++) {
        for (let y2 = y1; y2 < m; y2++) {
          if (isUnique(matrix, x1, y1, x2, y2)) {
            count++
          }
        }
      }
    }
  }

  return count
}

function isUnique(matrix, x1, y1, x2, y2) {
  const set = new Set()
  for (let i = x1; i <= x2; i++) {
    for (let j = y1; j <= y2; j++) {
      const letter = matrix[i][j]
      if (set.has(letter)) {
        return false
      }
      set.add(letter)
    }
  }

  return true
}

let matrix = []

const [n, m] = (await readline()).split(' ').map((item) => parseInt(item))
for (let i = 0; i < n; i++) {
  const arr = (await readline()).split(' ').map((item) => parseInt(item))
  matrix.push(arr)
}
const res = countUniqueSubmatrices(matrix)
console.log(res)
// const arr = [
//   ['a', 'a', 'd'],
//   ['a', 'b', 'c'],
// ]

// const res = countUniqueSubmatrices(arr)
// console.log(res)
