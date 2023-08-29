function myInstanceOf(obj, class_name) {
  let proto = obj.__proto__
  let prototype = class_name.prototype

  while (true) {
    if (proto === prototype) return true
    if (proto === null) return false

    proto = proto.__proto__
  }
}

console.log(myInstanceOf(1, Array))

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
console.log(icof(1, Array)) // true
console.log(icof({}, Object)) // true
