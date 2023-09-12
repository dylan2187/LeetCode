function compareSubtrees(n, arr, m) {
  if (2 * m > n) {
    return 'E'
  }

  let leftSum = 0,
    rightSum = 0
  for (let i = 2 * m; i <= n; i *= 2) {
    leftSum += arr[i - 1]
    if (i + 1 <= n) {
      leftSum += arr[i] // 右兄弟节点
    }
  }

  // 计算右子树的权重和
  for (let i = 2 * m + 1; i <= n; i *= 2) {
    rightSum += arr[i - 1]
    if (i + 1 <= n) {
      rightSum += arr[i]
    }
  }

  // 比较左右子树的权重和
  if (leftSum > rightSum) {
    return 'L'
  } else if (rightSum > leftSum) {
    return 'R'
  } else {
    return 'E'
  }
}

let n = parseInt(readline())

let arr = readline()
  .split(' ')
  .map((item) => parseInt(item))

let m = parseInt(readline())
const res = compareSubtrees(n, arr, m)
console.log(res)

let n = 7
let arr = [1, 2, 3, 3, 2, 5, 1]
let m = 3
const res = compareSubtrees(n, arr, m)
console.log(res)
