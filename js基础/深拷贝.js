function deepClone1(obj) {
  if (typeof obj !== 'object' || obj === null) {
    return obj
  } //不是引用数据类型，直接返回obj
  const isArray = Array.isArray(obj)
  let res = isArray ? [] : {}
  for (let key in obj) {
    const value = obj[key]
    //value是不是构造类型？是的话还要继续对它深拷贝。（typeof null返回值也是'object'）
    res[key] =
      typeof value === 'object' && value !== null ? deepClone(value) : value
  }
  return res
}

function deepClone(obj) {
  if (typeof obj !== 'object' || obj === null) return obj

  let res = Array.isArray(obj) ? [] : {}

  for (let key in obj) {
    const val = obj[key]
    res[key] = typeof val === 'object' && val !== null ? deepClone(val) : val
  }
  return res
}
