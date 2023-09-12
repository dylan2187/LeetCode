// 小红和朋友玩游戏，棋盘大小为n× m，有一颗棋子在 (1，1）的位置，每次可以向上或者向右移动奇数单位， 不能移动到棋盘外面，无法行动就输了，小红先手，请问小红能否必胜。
function canWin(n, m) {
  // 如果n或m是偶数，小红必胜
  if (n % 2 === 0 || m % 2 === 0) {
    return 'Yes'
  }
  // 否则小红必败
  return 'No'
}

let n = parseInt(readline())

for (let i = 0; i < n; i++) {
  let [n, m] = readline()
    .split(' ')
    .map((item) => parseInt(item))
  const res = canWin(n, m)
  console.log(res)
}

console.log(canWin(3, 3)) // 输出：false
console.log(canWin(3, 4)) // 输出：true
