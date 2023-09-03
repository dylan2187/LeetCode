// 树的遍历
function findParent(tree, target) {
  let result = null

  function dfs(node, parent) {
    if (node.value === target) {
      result = parent
      return
    }
    for (let child of node.children) {
      dfs(child, node)
    }
  }

  dfs(tree, null)
  return result ? result.value : null
}

let tree = {
  value: 1,
  children: [
    {
      value: 2,
      children: [
        { value: 3, children: [] },
        { value: 4, children: [] },
      ],
    },
    { value: 5, children: [] },
  ],
}

console.log(findParent(tree, 3)) // 输出：2
console.log(findParent(tree, 5)) // 输出：1
console.log(findParent(tree, 10)) // 输出：null

function findParent(root, target){
  function dfs(node,target){
    let result = null
    if(node.value === target){
      result = 
    }
  }
}