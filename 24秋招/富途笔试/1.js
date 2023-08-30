const father = {
  func() {
    console.log('jack--------')
  },
}

const son1 = {
  __proto__: father,
  func() {
    super.func()
  },
}

son1.func()

const son2 = {
  __proto__: father,
  func: function () {
    super.func()
  },
}
son2.func()
