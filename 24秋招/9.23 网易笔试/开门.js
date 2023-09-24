function openDoors(keys) {
  let opened = []
  for (let i = 0; i < keys.length; i++) {
    opened[keys[i] - 1] = i + 1
  }

  return opened
}

let keys = [5, 3, 1, 2, 4]
console.log(openDoors(keys)) // [3, 4, 4, 5, 5]
