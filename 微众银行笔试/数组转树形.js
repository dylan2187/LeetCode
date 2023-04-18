/**
一份省市县数据，是扁平结构（一维数组），需要转换为树状结构，请实现转换函数。
示例：[{id:1,parentId:null,name:'广东'},{id:2，parentId:2，name:'深圳'}...]，id 为节点唯一ID，parentld为父节点ID，parentld==nul代表为根节点。
 */

function transformToTree(arr) {
  const tree = {}
  arr.forEach(node => {
    if (node.parentId === null) {
      // 根节点
      tree[node.id] = { ...node, children: {} }
    } else {
      // 非根节点
      const parent = tree[node.parentId]
      if (!parent) {
        // 如果父节点不存在，则新建一个空的父节点
        tree[node.parentId] = { id: node.parentId, children: {} }
      }
      // 将当前节点添加到父节点的子节点中
      tree[node.parentId].children[node.id] = { ...node, children: {} }
    }
  })
  return tree
}

function arrayToTree(arr) {
  const map = arr.reduce((acc, cur) => {
    acc[cur.id] = { ...cur, children: [] }
    return acc
  }, {})
  let tree = []
  Object.values(map).forEach(node => {
    if (node.parentId == null) {
      tree.push(node)
    } else {
      map[node.parentId].children.push(node)
    }
  })
  return tree
}

let arr = [
  { id: 1, parentId: null, name: '广东' },
  { id: 2, parentId: 1, name: '深圳' },
  { id: 3, parentId: 1, name: '珠海' }
]

let res = arrayToTree(arr)
console.log(res)
