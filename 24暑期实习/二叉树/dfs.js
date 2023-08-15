function fun(n, o) {
  console.log(o);
  return {
    fun: function (m) {
      return fun(m, n)
    }
  }
}
var a = fun(0); // x
a.fun(1); // x