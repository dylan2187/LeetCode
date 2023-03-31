function deepClone1(obj) {
  if (typeof obj !== 'object' || typeof obj === null) {
    return obj
  }
  const isArray = Array.isArray(obj)
  let res = isArray ? [] : {}
  for (let key in obj) {
    const value = obj[key]
    //value是不是构造类型？是的话还要继续对它深拷贝。（typeof null返回值也是'object'）
    res[key] = typeof value === 'object' && value !== null ? deepClone(value) : value
  }
  return res
}

function deepClone(obj) {
  if (typeof obj !== 'object' || obj === null) {
    return obj
  }
  const isArray = Array.isArray(obj)
  let res = isArray ? [] : {}
  for (let k in obj) {
    let v = obj[k]
    res[k] = typeof v === 'object' && v !== null ? deepClone(v) : v
  }
  return res
}

const obj = {
  name: 'John',
  age: 30,
  friends: ['Tom', 'Jerry'],
  address: {
    city: 'New York',
    country: 'USA'
  }
}

const newobj = deepClone(obj)
console.log(newobj)

newobj === obj
newobj.address === obj.address

console.log(typeof deepClone)
Object.prototype.toString.call(deepClone)
