let set = new Set()
key = { a: 1 }
set.add(key)
key = null
console.log(set.size)
console.log([...set][0])
// 想一下如果是weakset呢？
