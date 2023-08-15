/*
问题 3： 写个Monkey函数，返回的对象提供eat和sleep两个函数，支持链式调用。具体调用方式如下所示：
Monkey('Alan').eat('Banana').sleep(4).eat('Apple').sleep(5).eat('Pear')
代码执行后输出:
my name is Alan
I eat Banana
等待 4 s
I eat Apple
等待 5 s
I eat Pear
*/

class Monkey {
  constructor(name) {
    this.name = name;
    this.actions = [`my name is ${this.name}`];
  }
  eat(food) {
    this.actions.push(`I eat ${food}`);
    return this;
  }
  sleep(time) {
    this.actions.push(`等待 ${time} s`);
    return this;
  }
  execute() {
    for (let item of this.actions) {
      console.log(item);
    }
  }
}

const monkeyAlan = new Monkey('Alan').eat('Banana').sleep(4).eat('Apple').sleep(5).eat('Pear').execute();


typeof ()