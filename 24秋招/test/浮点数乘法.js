function mul(num1, num2) {
  let len = 0
  let n1 = num1.toString()
  let n2 = num2.toString()
  len += n1.split('.')[1].length
  len += n2.split('.')[1].length

  const res =
    (Number(n1.replace('.', '')) * Number(n2.replace('.', ''))) /
    Math.pow(10, len)
  return res
}

const res = mul(1.9, 0.1)
console.log(res)
