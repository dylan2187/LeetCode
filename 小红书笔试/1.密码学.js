/**
 * 
 小明学会了一种加密方式。他定义suc(x)为x在字母表中的后继，例如a的后继为b，b的后继为c..（即按字母表的顺序后一个）。特别的，z的后继为a。对手一个原字符串S，将其中每个字母x都替换成其三重后继，即suc(suc(suc()的字母，即完成了加密。
例如，abc加密后变成def(suc(suc(suc(a))=d suc(suc(suc(b)))=e suc(suc(suc(c)))=f)）
现在小明知道一个加密后的字符串S’，想请你找出他的原串S
 */

//导入包
var __readline = require('readline-sync')
__readline.setDefaultOptions({ prompt: '' })
var readline = __readline.prompt

function decrypt(str) {
  let result = "";
  for (let i = 0; i < str.length; i++) {
    let charCode = str.charCodeAt(i);
    if (charCode >= 97 && charCode <= 122) {
      result += String.fromCharCode(((charCode - 97 + 23) % 26) + 97);
    } else if (charCode >= 65 && charCode <= 90) {
      result += String.fromCharCode(((charCode - 65 + 23) % 26) + 65);
    } else {
      result += str[i];
    }
  }
  return result;
}

let line
line = readline()
let len = parseInt(line)
line = readline()
let str = line
let res = decrypt(str)
console.log(res);

