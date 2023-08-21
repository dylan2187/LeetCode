// 小红每天下班后都会去小红书直播。已知她第i天上班的时间为ai；小时，下班后直播的时间为bi；小时。小红每上班 1 小时会增加x的焦虑度，每直播1 小时会降低y的焦虑度。
// 小红想知道，第n天结束时，焦虑度为多少？
// 请注意，焦虑度不会下降到负数！
// 第一行 n x y
function calculateAnxiety(n, x, y, a, b) {
  let anxiety = 0 // 初始焦虑度为0

  for (let i = 0; i < n; i++) {
    let workHours = a[i] // 第i天上班的小时数
    let liveHours = b[i] // 第i天直播的小时数

    // 增加上班时间的焦虑度
    anxiety += workHours * x

    // 降低直播时间的焦虑度，但不会下降到负数
    anxiety -= Math.min(liveHours * y, anxiety)
  }

  return anxiety
}

let l1 = readline()
let [n, x, y] = l1.split(' ').map((item) => parseInt(item))
let l2 = readline()
let workArr = l2.split(' ').map((item) => parseInt(item))
let l3 = readline()
let liveArr = l3.split(' ').map((item) => parseInt(item))

var res = 0
for (let i = 0; i < n; i++) {
  anxiety += workHours * x

  // 降低直播时间的焦虑度，但不会下降到负数
  anxiety -= Math.min(liveHours * y, anxiety)

  res = workArr[i] * x - liveArr[i] * y
  if (res < 0) res = 0
}

console.log(res)
