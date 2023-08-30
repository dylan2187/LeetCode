最近小强很喜欢玩一款勇士打怪的游戏，勇者和怪物都有一个属性：能力值。当勇者遭遇一个怪物时，战斗方式如下：
如果勇者的能力值不低于怪物的能力值，勇者胜。
否则勇者败。
勇者可以以任意顺序与怪物战斗，当勇者成功击败一只怪物后他可以获得一枚金币，初始时勇者金币数为0， 任意时刻勇者手中的金币数不能为负。
勇者可以在任意时刻花费一枚金币，提升1 点能力值。
现在小强想知道，勇者手中最多可以有多少金币，怪物可以不打完。
输入的参数有勇者初试能力值，怪兽数量，以及怪兽能力值的数组。
function maxCoins(heroPower, numMonsters, monsterPowers) {
  monsterPowers.sort((a, b) => a - b)
  let coins = 0
  let maxCoins = 0
  for (let i = 0; i < numMonsters; i++) {
    if (heroPower >= monsterPowers[i]) {
      //打赢了
      coins++
    } else if (coins > 0) {
      while (heroPower < monsterPowers[i] && coins > 0) {
        heroPower++

        coins--
        if (heroPower >= monsterPowers[i]) {
          coins++
          break
        }
      }
    }
    coins
    if (coins > maxCoins) {
      maxCoins = coins
    }
  }
  return coins
}

// Test the function

let [heroPower, numMonsters] = readline()
  .split(' ')
  .map((item) => parseInt(item))
const monsterPowers = readline()
  .split(' ')
  .map((item) => parseInt(item))
let res = maxCoins(heroPower, numMonsters, monsterPowers)
console.log(res)
// let heroPower = 1
// let numMonsters = 3
let monsterPowers = [2, 2, 1]
console.log(maxCoins(heroPower, numMonsters, monsterPowers)) // Output: 2
