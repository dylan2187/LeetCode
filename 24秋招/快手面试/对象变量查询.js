function query(obj, path) {
  console.log(path.length)
  if (!path.length) {
    return obj
  }

  const [next, ...rest] = path

  if (!obj.hasOwnProperty(next)) {
    return undefined
  }

  return query(obj[next], rest)
}

const obj = {
  a: {
    b: {
      c: 42,
    },
  },
}

console.log(query(obj, ['a', 'b', 'c'])) // 输出 42
// console.log(query(obj, ['a', 'b', 'd'])) // 输出 undefined

function myQuery(obj, path) {
  if (path.length === 0) {
    return obj //最后剩下的obj就是要查找的值
  }
  const [next, ...res] = path
  if (!(next in obj)) {
    return undefined
  }
  return myQuery(obj[next], res)
}
