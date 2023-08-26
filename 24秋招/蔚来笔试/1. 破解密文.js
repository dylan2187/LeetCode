// 飞行员牛牛近日收到一份密电；密文是仅由一行小写字母构成；牛牛想要破解该密文；但是由于密文太长了，因此，他想请你来帮忙破解该密文；
// 已知密码破解规则如下：
// 如果字符str[i]为元音字母；则该处的字符的明文是它本身；
// 若字符str[j]为辅音字母；则该处的字符的明文将破解为三个字符：
// 1。辅音字母本身；
// 2。在字母表中最接近该辅音字母的元音字母，若该辅音字母正好落于两个元音字母之间，那么将选择更接近字母表开头的元音字母；若辅音字母为'c'，则将选择元音字母'a'而不是'e'；
// 3。字母表中原始辅音字母之后的下一个辅音字母；若该字母为'd'，则，将选择下一个辅音字母'f'；注意：'z'的下一个辅音字母是他本身。
// 例如：密文nowcoder的明文是nopowuecadodeferos；
// 现在给你一行字符串，请你输出破解后的明文；
function calculateCharDifference(char1, char2) {
  var diff = char2.charCodeAt(0) - char1.charCodeAt(0)
  return diff
}
function decryptCipher(cipher) {
  const vowels = 'aeiou'
  const consonants = 'bcdfghjklmnpqrstvwxyz'
  let plaintext = ''

  for (let i = 0; i < cipher.length; i++) {
    const char = cipher[i] //密文字符
    if (vowels.includes(char)) {
      plaintext += char
    } else if (consonants.includes(char)) {
      //找出最近的元音字母
      let closestVowel = vowels[0]
      let minDistance = Math.abs(calculateCharDifference(char, vowels[0]))
      for (let j = 0; j < vowels.length; j++) {
        let distance = Math.abs(calculateCharDifference(char, vowels[j]))
        // distance
        if (distance < minDistance) {
          minDistance = distance
          closestVowel = vowels[j]
        }
      }
      const index = consonants.indexOf(char)
      // const closestVowel = vowels.charAt(Math.floor(index / 2))
      const nextConsonant =
        char === 'z' ? 'z' : consonants.charAt((index + 1) % consonants.length)
      plaintext += char + closestVowel + nextConsonant
    }
  }

  return plaintext
}

let str = readline()
const res = decryptCipher(str)
console.log(res)

// const cipher = 'nowcoder'
// const plaintext = decryptCipher(cipher)
// console.log(plaintext) // 输出：nopowuecadodeferos
