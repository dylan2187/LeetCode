// 使用js做下面这道题
// 小明是一家店铺的专职外卖员。小明每天会接到很多不同地方的n个外卖订单，其中第i个订单会在si时刻下单，花费小明ti时间往返，并赚取ai元酬劳。小明每次只能送1单外卖，订单一旦错过就会被派给其他外卖员。
// 如果小明提前知道了今天的全部订单，请你帮小明选择最优的接单方式，使得今天赚取的酬劳最多。
// 下单时刻数组s=[1, 3, 6, 7, 11]，往返时间数组t=[4, 3, 4, 3, 9],订单酬劳数组a=[2, 5, 5, 3, 4]
// 选择2、3、5单，可以赚14元

function maxReward(s, t, a) {
  const orders = s
    .map((val, idx) => ({
      start: val,
      end: val + t[idx],
      reward: a[idx],
    }))
    .sort((a, b) => a.end - b.end)

  const dp = new Array(orders.length).fill(0)
  dp[0] = orders[0].reward

  for (let i = 1; i < orders.length; i++) {
    dp[i] = Math.max(dp[i - 1], orders[i].reward) // 不接这个订单或者只接这个订单
    for (let j = i - 1; j >= 0; j--) {
      if (orders[j].end <= orders[i].start) {
        dp[i] = Math.max(dp[i], orders[i].reward + dp[j]) // 这个订单和前面可以接的订单
        break
      }
    }
  }
  return Math.max(...dp)
}

const s = [1, 3, 6, 7, 11]
const t = [4, 3, 4, 3, 9]
const a = [2, 5, 5, 3, 4]
console.log(maxReward(s, t, a)) // 输出：14
