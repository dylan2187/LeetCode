function maxGold(heroPower, monsterNum, monsterPowers) {
  // Sort monster powers in ascending order
  monsterPowers.sort((a, b) => a - b)

  let gold = 0
  for (let i = 0; i < monsterNum; i++) {
    if (heroPower >= monsterPowers[i]) {
      heroPower++
      gold++
    } else if (gold > 0) {
      // If hero's power is less than monster's power and hero has gold, spend gold to increase power
      heroPower++
      gold--
    } else {
      // If hero's power is less than monster's power and hero has no gold, stop the game
      break
    }
  }
  return gold
}

console.log(maxGold(1, 3, [2, 2, 1]))
