var add = function (x) {
  var sum = 1
  var tmp = function (x) {
    sum = sum + x
    return tmp
  }
  tmp.toString = function () {
    return sum
  }
  return tmp
}
const res = add(10)(2)(3)
console.log(res)
