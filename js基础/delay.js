async function fun() {
  console.log(1)
  await delay(3000)
  console.log(2)
}

function delay(time) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve()
    }, time)
  })
}
// const delay＝time ＝＞ new Promise(resolve＝＞setTimeout(resolve, time))

fun()
