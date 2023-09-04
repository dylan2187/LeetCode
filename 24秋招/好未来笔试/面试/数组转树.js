// 实现一个handleTree函数，参数为对象列表，形如 [ {id: 11, parentId: null}, {id: 2, parentId: 11}, {id: 3, parentId: 11}, {id: 4, parentId: 2}, {id: 5, parentId: 3} ]，函数将参数处理成树状结构，并返回根节点。
function handleTree(array) {
  // todo
  let roots = {}
  const map = {}
  for (let node of array) {
    node.children = []
    map[node.id] = node
    if (!node.parentId) {
      roots = node
    }
  }

  for (let node of array) {
    if (node.parentId) {
      const parent = map[node.parentId]
      if (parent) {
        parent.children.push(node)
      }
    }
  }
  return roots
}
// console.log(JSON.stringify(handleTree(array), null, 2))

let arr = [
  { id: 11, parentId: null },
  { id: 2, parentId: 11 },
  { id: 3, parentId: 11 },
  { id: 4, parentId: 2 },
  { id: 5, parentId: 3 },
]
console.log(JSON.stringify(handleTree(arr), null, 2))

// 输出: {
//     id: 11,
//     parentId: null,
//     children: [
//         {
//             id: 2,
//             parentId: 11,
//             children: [
//                 {
//                     id: 4,
//                     parentId: 2
//                 }
//             ]
//         },
//         {
//             id: 3,
//             parentId: 11,
//             children: [
//                 {
//                     id: 5,
//                     parentId: 3
//                 }
//             ]
//         }
//     ]
// }
