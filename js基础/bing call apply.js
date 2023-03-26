// function person() {
//   console.log(this.name);
//   eat(food1, food2) {
//     console.log('我喜欢吃:' + food1 + ', ' + food2);
//   }
//   return this
// }

let person = {
  name: 'person',
  food1: 'carrot',
  food2: 'potato',

  eat(food1, food2) {
    console.log(`我是${this.name}` + '我喜欢吃:' + food1 + ', ' + food2);
  }

}

const wk = {
  name: 'wangkai'
}

// person.eat.call(wk, 'kk', 'aa')
let fun = person.eat.bind(wk, 'kk', 'aa')
fun()

// person.eat() 

const type = Object.prototype.toString.bind([])
type()

function Animal() {
  this.eat = function () {
    console.log('eat');
  }
}
function Cat() {
  Animal.call(this)
}

let cat = new Cat()
cat.eat()