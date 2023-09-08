// 使用js解决下面这道题
// 你想对一棵奇怪的二叉树进行运算。这棵树每个节点要么有两个子节点，要么没有子节点。
// 如果一个节点没有子节点，则这个节点的值为1。如果某个节点有两个子节点，这个节点的值就是它两个子节点的值做某种运算后的结果，某种运算取决于这个节点的颜色，如果为红色则是乘法，如果为蓝色则是加法。
// 你想知道根节点的值。
// 树，是一种无向无环联通图。
// 输入n表示节点个数，n-1个正整数的数组p表示第i个节点的父节点，1号节点是根节点。n个整数的数组c，当c[i]=1时表示第i个节点是蓝色，c[i]=2表示红色
// 样例：当n=3，p = [1, 1]，c = [1, 1, 1]，输出2

// function calculateValue(n, p, c) {
//   const tree = Array.from({ length: n + 1 }, () => [])
//   for (let i = 0; i < n - 1; i++) {
//     tree[p[i]].push(i + 2)
//   }
//   function dfs(node) {
//     if (tree[node].length === 0) return 1
//     if (c[node - 1] === 1) {
//       return tree[node].reduce((sum, child) => sum + dfs(child), 0)
//     }
//     if (c[node - 1] === 2) {
//       return tree[node].reduce((product, child) => product * dfs(child), 1)
//     }
//   }
//   return dfs(1)
// }

// const n = parseInt(readline())
// const p = readline()
//   .split(' ')
//   .map((item) => parseInt(item))
// const c = readline()
//   .split(' ')
//   .map((item) => parseInt(item))
// const res = calculateValue(n, p, c)
// console.log(res)

// console.log(calculateValue(3, [1, 1], [1, 1, 1])) // 输出: 2

// function calculateValue(n, p, c) {
//   const tree = Array.from({ length: n + 1 }, () => [])
//   for (let i = 0; i < n - 1; i++) {
//     tree[p[i]].push(i + 2)
//   }
//   function dfs(node) {
//     if (tree[node].length === 0) return 1
//     if (c[node - 1] === 1) {
//       return tree[node].reduce((sum, child) => sum + dfs(child), 0)
//     }
//     if (c[node - 1] === 2) {
//       return tree[node].reduce((product, child) => product * dfs(child), 1)
//     }
//   }
//   return dfs(1)
// }
// console.log(calculateValue(3, [1, 1], [1, 1, 1])) // 输出: 2

function solve(n, p, c) {
  const children = Array.from({ length: n + 1 }, () => [])
  for (let i = 0; i < n - 1; i++) {
    children[p[i]].push(i + 2) // 因为节点编号是从1开始的
  }

  function calc(node) {
    if (children[node].length === 0) return 1 // 没有子节点
    let left = calc(children[node][0])
    let right = calc(children[node][1])
    return c[node - 1] === 1 ? left + right : left * right // 根据颜色决定运算符
  }

  return calc(1)
}

console.log(solve(3, [1, 1], [1, 1, 1])) // 输出 2
