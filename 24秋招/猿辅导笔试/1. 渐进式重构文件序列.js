// // 计算每个文件被依赖的次数
// let counts = {}
// for (let file in dependencies) {
//   counts[file] = 0
// }

// for (let file in dependencies) {
//   for (let dep of dependencies[file]) {
//     counts[dep]++
//   }
// }

// // 按照被依赖次数和文件名字典序进行排序
// let files = Object.keys(counts)
// files.sort((a, b) => {
//   if (counts[a] !== counts[b]) {
//     return counts[a] - counts[b]
//   } else {
//     return a.localeCompare(b)
//   }
// })

// console.log(files)

function getRefactorOrder(dependencies) {
  // 计算每个文件被依赖的次数
  let counts = {}
  for (let file in dependencies) {
    counts[file] = 0
  }

  for (let file in dependencies) {
    for (let dep of dependencies[file]) {
      counts[dep]++
    }
  }

  // 按照被依赖次数和文件名字典序进行排序
  let files = Object.keys(counts)
  files.sort((a, b) => {
    if (counts[a] !== counts[b]) {
      return counts[a] - counts[b]
    } else {
      return a.localeCompare(b)
    }
  })

  return files.join(' ')
}

let dependencies = {
  'A.js': ['D.js', 'C.js', 'E.js'],
  'B.js': [],
  'C.js': ['B.js'],
  'D.js': ['B.js', 'C.js'],
  'E.js': ['B.js'],
}
console.log(getRefactorOrder(dependencies))

// let n = parseInt(readline()) //n个用例
// let m = parseInt(readline()) //n个文件
// for (let i = 0; i < n; i++) {
//   let dependencies = {}
//   for (let j = 0; j < m; j++) {
//     const arr = readline().split(' ')
//     arr.shift()
//     const key = arr.shift()
//     dependencies[key] = arr
//   }
//   const res = getRefactorOrder(dependencies)
//   console.log(res)
// }
