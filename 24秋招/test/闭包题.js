var f = (function () {
  var c = 'ccc'
  return {
    a: function () {
      return c
    },
    b: function (d) {
      c = d
    },
  }
})()

console.warn(f.a())
// ccc

console.warn(f.c)
// ccc

console.warn(f.b('www'))
// www

console.warn(f.a())
// www
