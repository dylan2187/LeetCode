a = 1;
function test(e) {
  e
  function e() { }
  arguments[0] = 2;

  console.log(e);
  if (a) {
    var b = 3;
  }
  var c;
  a = 4;

  var a;
  console.log(b);
  f = 5;
  console.log(c);
  console.log(a);
}
var a;
test(1);
console.log(a);
console.log(f);



/*
首先声明了全局变量a，并赋值为1。
定义了一个函数test，接受一个参数e。
在函数内部，声明了一个名为e的函数，此时e被重定义为局部变量，覆盖了函数参数e。
将函数参数e的值改为2，但是由于在第3步中e已经被重定义为局部变量，所以这里的e并不会被改变。
输出局部变量e的值，由于在第3步中e已经被重定义为函数，所以输出的是函数本身。
判断全局变量a的值是否为真，由于在第1步中a的值为1，所以条件成立。
声明局部变量b，并赋值为3。
声明局部变量c。
将全局变量a的值改为4，但是由于在第10步中又声明了一个局部变量a，所以这里的a并不会被改变。
声明局部变量a，并赋值为undefined。
输出局部变量b的值，由于在第7步中声明的是局部变量b，而不是全局变量，所以此时b并不存在，输出undefined。
将全局变量f赋值为5，由于没有使用var关键字声明，所以f成为了全局变量。
输出局部变量c的值，由于在第8步中声明的是局部变量c，但是并没有给它赋值，所以输出undefined。
输出局部变量a的值，由于在第9步中将全局变量a的值改为4，但是在第10步中又声明了一个局部变量a，所以此时输出的是undefined。
声明全局变量a，并赋值为undefined。
调用函数test，并传入参数1。
输出全局变量a的值，由于在第15步中将全局变量a赋值为undefined，所以此时输出undefined。
输出全局变量f的值，由于在第12步中将f赋值为5，所以此时输出5。
*/


ass = 100
// var ass
console.log('ass', ass);


if (true) {
  haha = 1000
}

console.log(haha);

function test2() {
  console.log(name);
  name = "test2"
  console.log(name);
}

function test1() {
  name = "test1";
  console.log(name);
}

function test3() {
  var name
  console.log(this.name);
  console.log(name);
  // var name = "test3"
}
test1();  //test1
test2();  //test1 test2
test3();  //test2  undefined