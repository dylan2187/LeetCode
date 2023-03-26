// 实现一个基于promise的sleep函数，睡眠时间<500ms，大于500将reject


// function sleep(time) {
//   return new Promise((resolve, reject) => {
//     if (time < 5000) {
//       setTimeout(resolve, time);
//     } else {
//       reject(new Error('睡眠时间过长'));
//     }
//   });
// }

// sleep(4000).then(() => {
//   console.log('睡眠结束');
// }).catch((err) => {
//   console.error(err.message);
// })

const sleep1 = (time) => {
  return new Promise(
    (resolve) => {
      return setTimeout(() => {
        console.log('睡醒了');
      }, time);
    }
  )
}

// function sleep(ms: number): Promise<void> {
//   return new Promise((resolve) => setTimeout(resolve, ms));
// }

sleep1(5000)