function func1() {
  try {
    throw 'Error!'
  } finally {
    console.log('run')
  }
}
function func2() {
  try {
    console.log('run')
  } finally {
    throw 'Error!'
  }
}
function func3() {
  var i = 0
  while (i < 3) {
    try {
      i++
      break
    } finally {
      console.log(i)
    }
  }
}
func2()
