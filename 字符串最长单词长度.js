const maxWord = (str) => {
  let arr = str.split(' ')
  let maxLen = 0
  for (let i = 0; i < arr.length; i++) {
    if (!hasNum(arr[i])) {
      if (arr[i].length > maxLen)
        maxLen = arr[i].length
    }
  }
  return maxLen
}

const hasNum = (str) => {
  let res = false
  for (let c of str) {
    if (c >= '0' && c <= '9')
      res = true
  }
  return res

}

let str = 'I am a good1 boy'
maxWord(str)