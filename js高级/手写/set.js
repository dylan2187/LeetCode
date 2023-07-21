const set = new Set([1, 2, 3, 3, 3, 4, '55', 5, '55', '66'])
console.log(set)
// [1,2,3,4,'55',5,'66']

const arr = ['name', '王五']
const set1 = new Set([
  ['name', '王五'],
  ['name1', '张三'],
  arr,
  ['name1', '李四'],
  arr,
  ['title', 'Author'],
  ['name', '王五'],
])
console.log(set1)
// [    ['name', '王五'],
//     ['name1', '张三'],
//     ['name', '王五'],
//     ['name1', '李四'],
//     ['title', 'Author'],
//     ['name', '王五'],
// ]
