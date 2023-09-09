function a() {
  let c = 0
  let setC = () => {
    c = c + 1
  }
  let getC = () => {
    return c
  }

  return [setC, getC]
}

const [setC, getC] = a()
setC()
console.log(getC()) // 输出值
