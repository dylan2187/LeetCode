// 在下面数组四个点中取坐标在最靠近左上角的坐标点：（x值从左往右递增，Y值从上往下递增）
// 输入：[{"x":340,"y":89},{"x":120,"y":185},{"x":84,"y":69},{"x":66,"y":66}]
// 输出：{"x":66,"y":66}

const { link } = require('fs')

function fun(str) {
  const arr = JSON.parse(str) // 将字符串数组转换为实际的 JavaScript 数组
  let minPoint = arr[0] // 初始化为第一个点
  for (let i = 1; i < arr.length; i++) {
    const point = arr[i]
    if (point.x < minPoint.x || (point.x === minPoint.x && point.y < minPoint.y)) {
      minPoint = point
    }
  }
  const result = JSON.stringify(minPoint) // 将结果转换为字符串格式

  console.log(result)
}

const rl = require('readline').createInterface({ input: process.stdin })
var iter = rl[Symbol.asyncIterator]()
const readline = async () => (await iter.next()).value

void (async function () {
  // Write your code here
  while ((line = await readline())) {
    fun(line)
  }
})()
