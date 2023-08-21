let t = parseInt(await readline())
for (let i = 0; i < t; i++) {
  let l2 = await readline()
  let [n, k] = l2.split(' ').map((item) => parseInt(item))
  let l3 = await readline()
  let arr = l3.split(' ').map((item) => parseInt(item)) //备操作的数组
  //k次操作
  for (let i = 0; i < k; i++) {
    let line = await readline()
    let [index1, index2] = line.split(' ').map((item) => parseInt(item))
    arr[index1 - 1] += 1
    arr[index2 - 1] -= 1
  }
  if (isNonDecreasing(arr)) {
    console.log('YES')
  } else {
    console.log('NO')
  }
}

function isNonDecreasing(arr) {
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < arr[i - 1]) {
      return false
    }
  }
  return true
}
