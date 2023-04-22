// 现在，你需要实现一个本地的 add 方法，用于计算任意数量数字的加法，其中每次加法运算都需要通过调用远程 API的 addRe mote 方法来实现。addRemote 方法能够计算两个数字的和。

async function add(...nums) {
  let sum = 0
  for (let i = 0; i < nums.length; i++) {
    sum = await addRemote(sum, nums[i])
  }
  return sum
}

function addRemote(a, b) {
  // 远程调用 addRemote 方法，这里使用 setTimeout 模拟异步调用
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(a + b)
    }, 500)
  })
}

add(1, 1, 1, 1, 1, 1, 1, 1)
  .then((result) => {
    console.log(result)
  })
  .catch((err) => {})
