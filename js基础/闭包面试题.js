// 输出结果？

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
a.fun(2); // x 

var b = fun(0).fun(1).fun(2)    //
