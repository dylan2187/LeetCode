function counter(start) {
  let nextValue = Math.round(start)
  return {
    next: function () {
      return nextValue++
    },
  }
}

let sng = counter(1000)
let sn1 = sng.next()
let sn2 = sng.next()

console.log(sn1, sn2)
