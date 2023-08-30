// 小红计划在m天刷n道题，第i天计划刷ai题。小红会严格按照计划刷题，到第i天时，小红会评估剩下平均每天需要刷t题。若ai大于t，则记录＞；若ai等于t，则记录 =；若ai小于t，则记录＜。
// 请你输出小红的评估记录。
function evaluatePlan(m, n, plan) {
  let result = ''
  let remainingQuestions = n

  for (let i = 0; i < m; i++) {
    remainingQuestions -= plan[i]
    let remainingDays = m - i - 1
    let average = remainingDays > 0 ? remainingQuestions / remainingDays : 0

    if (plan[i] > average) {
      result += '>'
    } else if (plan[i] < average) {
      result += '<'
    } else {
      result += '='
    }
  }

  return result
}

let [n, m] = (await readline()).split(' ').map((item) => parseInt(item))

let plan = (await readline()).split(' ').map((item) => parseInt(item))

const res = evaluatePlan(m, n, plan)
console.log(res)
