// 糖果工厂可以生产n种不同的糖果，假设这些糖果的编号分别为1到n，每一天工厂可以生产ci个编号为i的糖果。今天工厂接到了一个订单，需求是a包糖果，且每包糖果必须是同一种类的，每包数量不能少于b个。假设糖果工厂在无存货的情况下，至少需要多少天才能完成这个订单？
// 样例：当输入n=3，a=10，b=20，每天能生产编号为i的数量[7,9,6]
// 输出为10

function minDays(n, a, b, candiesPerDay) {
  let days = 0
  let totalPacks = 0

  while (totalPacks < a) {
    days++
    totalPacks = 0
    for (let i = 0; i < n; i++) {
      totalPacks += Math.floor((candiesPerDay[i] * days) / b)
    }
  }

  return days
}

let n,
  a,
  b = readline()
    .split(' ')
    .map((item) => parseInt(item))

let candiesPerDay = readline()
  .split(' ')
  .map((item) => parseInt(item))

const res = minDays(n, a, b, candiesPerDay)
console.log(res)

// 测试样例
let n = 3,
  a = 10,
  b = 20,
  candiesPerDay = [7, 9, 6]
console.log(minDays(n, a, b, candiesPerDay)) // 输出：10
