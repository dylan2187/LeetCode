function minOperations(board) {
  let n = board.length
  let m = board[0].length
  let operations1 = 0,
    operations2 = 0

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if ((i + j) % 2 === board[i][j]) {
        operations1++
      } else {
        operations2++
      }
    }
  }

  return Math.min(operations1, operations2)
}

const [n, m] = readline()
  .split(' ')
  .map((item) => parseInt(item))

let board = []
for (let i = 0; i < n; i++) {
  let row = readline()
    .split(' ')
    .map((item) => parseInt(item))
  board.push(row)
}
const res = minOperations(board)
console.log(res)

// 测试用例
let board = [
  [1, 0, 1],
  [0, 1, 0],
  [1, 0, 1],
]
console.log(minOperations(board)) // 输出：0

board = [
  [0, 1, 1],
  [1, 1, 0],
  [0, 0, 0],
]
console.log(minOperations(board)) // 输出：4
