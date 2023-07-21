var name = 'window'

var person = {
  name: 'person',
  sayName: function () {
    console.log(this.name)
  },
}

function sayName() {
  var sss = person.sayName
  sss() //独立函数调用默认绑定， -> window
  sss.call(person) //显式绑定 -> person
  person.sayName() //隐式绑定 -> person
  person.sayName() //person
  ;(b = person.sayName)() //默认绑定 -> window
}

sayName()
