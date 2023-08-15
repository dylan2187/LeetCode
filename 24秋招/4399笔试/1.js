const obj = {
  value: 10,
  getValue: function () {
    console.log(this.value)
  },
  arrowGetValue: () => {
    console.log(this.value)
  },
}

obj.getValue()

const getValueFunc = obj.getValue
getValueFunc()

obj.arrowGetValue()

const arrowGetValueFunc = obj.arrowGetValue
arrowGetValueFunc()
