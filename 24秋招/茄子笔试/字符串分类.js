function classifyStrings(arr) {
  let map = new Map()
  arr.forEach((str) => {
    let count = new Array(26).fill(0)
    for (let i = 0; i < str.length; i++) {
      count[str.charCodeAt(i) - 97]++ // 97 是 'a' 的 ASCII 码
    }
    let key = count.join(',')
    map.set(key, true)
  })
  return map.size
}

let n = parseInt(await readline())
let strs = []
for (let i = 0; i < n; i++) {
  let str = await readline()
  strs.push(str)
}
const res = classifyStrings(strs)
console.log(res)

let strings = ['abcd', 'abdc', 'dabc', 'bacd']
console.log(classifyStrings(strings))

// let strings = ['abc', 'bca', 'cab', 'xy', 'yx', 'z']
// let strs = ['abcd', 'abdc', 'dabc', 'bacd']
// console.log(classifyStrings(strs))
