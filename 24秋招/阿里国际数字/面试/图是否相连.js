// 以下是一个表示图的结构，需要设计算法，判断一个点可以到达另一个点
// direction 代表 a点指向b点
const graph = {
  a: {
    id: 'a',
    direction: ['b'],
  },
  b: {
    id: 'b',
    direction: ['c', 'd'],
  },
  c: {
    id: 'c',
    direction: ['a', 'e'],
  },
  d: {
    id: 'd',
    direction: ['f'],
  },
  e: {
    id: 'e',
    direction: ['g'],
  },
  f: {
    id: 'f',
    direction: [],
  },
  g: {
    id: 'g',
    direction: [],
  },
}

const getRouter = (startId, endId) => {
  // do something
  const visited = new Set()
  const dfs = function (id) {
    if (id === endId) return true
    if (visited.has(id)) return false
    visited.add(id)
    for (let neigh of graph[id].direction) {
      if (!visited.has(neigh)) {
        if (dfs(neigh)) return true
      }
    }
    return false
  }
  return dfs(startId)
}

// const getRouter = (startId, endId) => {
//   let visited = new Set()

//   const dfs = (id) => {
//     if (id === endId) {
//       return true
//     }
//     if (visited.has(id)) {
//       return false
//     }
//     visited.add(id)

//     for (let i = 0; i < graph[id].direction.length; i++) {
//       if (dfs(graph[id].direction[i])) {
//         return true
//       }
//     }
//     return false
//   }

//   return dfs(startId)
// }
console.log(getRouter('c', 'f'))
