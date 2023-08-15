// instanceof 核心原理是：对象能否通过 __proto__ 找到构造函数的原型
function icof(o, p) {
  // 构造函数的原型
  p = p.prototype
  // 对象的 __proto__
  o = o.__proto__

  while (true) {
    if (o === null) return false
    if (o === p) return true
    o = o.__proto__
  }
}
const arr = []
console.log(icof(arr, Object)) // true
console.log(icof({}, Object)) // true
