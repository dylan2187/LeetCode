class TreeNode {
  constructor(val) {
    this.val = val
    this.children = []
  }
}

function build(n, edges) {
  const nodeList = Array.from({ length: n }, (_, i) => new TreeNode(i + 1))
  for (let i = 1; i < n; i++) {
    nodeList[edges[i - 1] - 1].children.push(nodeList[i])
  }
  return nodeList[0]
}

function dfs(node, depthList) {
  if (!node.children.length) {
    depthList[node.val] = 1
    return 1
  }

  let depth = 0
  for (const child of node.children) {
    depth += dfs(child, depthList)
  }

  depthList[node.val] = depth
  return depth
}

// Test Input
// const input = `8 4
// 1 1 2 2 3 3 3
// 4 2 1 5
// 5 3 2 8`
// var input = ''
// while ((line = readline())) {
//   input += line
// }
// const lines = input.split('\n')
let line = readline()
const [n, Q] = line.split(' ').map(Number)
line = readline()
const edges = line.split(' ').map(Number)
line = readline()
const queries1 = line.split(' ').map(Number)
line = readline()
const queries2 = line.split(' ').map(Number)

const root = build(n, edges)
const depthList = {}
dfs(root, depthList)

let res = 0
for (let i = 0; i < Q; i++) {
  res ^= depthList[queries1[i]] * depthList[queries2[i]]
}

console.log(res)
