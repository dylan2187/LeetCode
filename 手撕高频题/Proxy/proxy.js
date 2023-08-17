let obj = {
  name: 'wangkai',
  age: 18,
}

// Object.entries(obj).forEach((entry) => {
//   const [key, val] = entry
//   console.log(key, val)
// })

const p = new Proxy(obj, {
  get: function (target, key) {
    console.log(`监听${key}的获取: ${target[key]}`)
    return target[key]
  },
  set: function (target, key, val) {
    target[key] = val
  },
})

console.log(p.name)

p.name = 'dylan'
console.log(p.name)

p.address = 'qingdao'
console.log(p)
