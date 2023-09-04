function listToTree(list) {
  let map = {},
    node,
    roots = [],
    i
  for (i = 0; i < list.length; i += 1) {
    map[list[i].id] = i // initialize the map
    map
    list[i].children = [] // initialize the children
  }
  for (i = 0; i < list.length; i += 1) {
    node = list[i]
    if (node.parentId !== null) {
      //不是根节点
      // if you have dangling branches check that map[node.parentId] exists
      list[map[node.parentId]].children.push(node)
    } else {
      roots.push(node)
    }
    // console.log('🚀 ~ roots:', JSON.stringify(roots, null, 2))
  }
  return roots
}

let list = [
  { id: 1, name: 'Node1', parentId: null },
  { id: 2, name: 'Node2', parentId: 1 },
  { id: 3, name: 'Node3', parentId: 1 },
  { id: 4, name: 'Node4', parentId: 2 },
  { id: 5, name: 'Node5', parentId: 3 },
]

function foo(arr) {
  let res = []
  let map = {} //临时存放映射关系 id-> arr中的索引（键值对）
  for (let i = 0; i < arr.length; i++) {
    map[arr[i].id] = i //通过node的id来查找索引
    arr[i].children = []
  }

  for (let i = 0; i < arr.length; i++) {
    let node = arr[i]
    //是否是根节点？
    if (arr[i].parentId === null) {
      res.push(arr[i])
    } else {
      list[map[node.parentId]].children.push(arr[i])
    }
  }
  return res
}

function list2tree(list) {
  let res = []
  let map = {}
  //初始化
  for (let i = 0; i < list.length; i++) {
    map[list[i].id] = i
    list[i].children = []
  }
  for (let i = 0; i < list.length; i++) {
    let node = list[i]
    //判断当前节点是否是根节点？
    if (node.parentId === null) {
      res.push(node)
    } else {
      list[map[node.parentId]].children.push(node)
    }
  }
  return res
}

console.log(JSON.stringify(list2tree(list), null, 2))
