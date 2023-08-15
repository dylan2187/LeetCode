/**
小红拿到了一个正整数a，她希望你找出一个不大于x的正整数b，满足a xor b的值尽可能大。你能帮帮她吗？
注：xor指按位异或
函数的输入是两个参数：a和x




 */


function findMaxXor(a, x) {
  if (a > x) {
    return x;
  }
  let max = 0;
  for (let i = 0; i <= x; i++) {
    let b = a ^ i; // 计算a xor b
    if (b <= x && b >= max) {
      max = b;
    }
  }
  return max;
}



let a = 3;
let x = 2;
let max = findMaxXor(a, x);
console.log(max); // 输出1
