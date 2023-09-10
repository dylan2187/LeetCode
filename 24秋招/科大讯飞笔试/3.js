var a = 1
;(function () {
  if (typeof a == 'undefined') {
    a = 10
    console.log(a++)
  } else {
    console.log(a--)
  }
})()
