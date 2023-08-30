let table = [
  { name: 'Alice', weight1: 3, weight2: 2, weight3: 1 },
  { name: 'Bob', weight1: 2, weight2: 3, weight3: 2 },
  { name: 'Charlie', weight1: 2, weight2: 2, weight3: 3 },
  { name: 'David', weight1: 3, weight2: 1, weight3: 4 },
  { name: 'Eve', weight1: 2, weight2: 1, weight3: 5 },
]

// 定义排序顺序
let sortingOrder = [
  { name: 'weight1', ascending: false },
  { name: 'weight2', ascending: false },
  { name: 'weight3', ascending: false },
]

function compareRows(a, b) {
  for (let { name, ascending } of sortingOrder) {
    if (a[name] < b[name]) return ascending ? -1 : 1
    if (a[name] > b[name]) return ascending ? 1 : -1
  }

  // 如果所有字段都相等，返回 0
  return 0
}

table.sort(compareRows)

console.log(table)
