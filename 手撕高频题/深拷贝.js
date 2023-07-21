function deepCopy(input) {
  if (typeof input !== 'object' || typeof input === 'null') {
    return input
  }
  const isArray = Array.isArray(input)
  let res = isArray ? [] : {}
  for (const key in input) {
    const value = input[key]
    res[key] =
      typeof value === 'object' && value !== null ? deepCopy(value) : value
  }
  return res
}

let a = {
  name: 'wangkai',
  age: 18,
  friends: {
    name: 'honghong',
    age: 20,
  },
}

let b = deepCopy(a)
b.friends.name = 'dylan'
console.table({ a, b })
