const levelOrder = (root) => {
  let res = []
  const bfs = (root, depth) => {
    if (root === null) return
    if (!res[depth]) {
      res[depth] = []
    }
    bfs(root.left, depth + 1)
    res[depth].push(root.val)
    bfs(root.right, depth + 1)
  }
  bfs(root, 0)
  return res
}

let root = [3, 9, 20, null, null, 15, 7]
levelOrder(root)


function levelOrder1(root) {
  let res = []
  function bfs(root, depth) {
    if (root === null) return
    if (!res[depth]) res[depth] = []
    bfs(root, depth + 1)
    res[depth].push(root.val)
    bfs(root, depth + 1)
  }
  bfs(root, 0)
  return res
}