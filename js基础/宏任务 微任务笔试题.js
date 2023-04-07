/* 第一题
new Promise((resolve, reject) => {
  resolve(1)    //标记为成功

  new Promise((resolve, reject) => {
    resolve(2)  //标记为成功
  }).then((data) => {
    console.log(data);  //① 进入微任务队列
  })
}).then((data) => {
  console.log(data);    //② 进入微任务队列
})

console.log(3); //③ 同步任务 进入执行栈
//输出： 3 2 1
*/

/*第二题
console.log(11);
setTimeout(() => {
  console.log(12);
  let p = new Promise((resolve) => {
    resolve(13)
  })
  p.then((res) => {
    console.log(res);
  })
  console.log(15);
}, 0);
console.log(14);
*/

//第三题
// setTimeout(() => {
//   console.log(1);
// }, 0);

// new Promise((resolve, reject) => {
//   console.log(2);
//   resolve('p1')

//   new Promise((resolve, reject) => {
//     console.log(3);
//     setTimeout(() => {
//       resolve('setTimeout2')
//       console.log(4);
//     }, 0);
//     resolve('p2')
//   }).then((data) => {
//     console.log(data);
//   })

//   setTimeout(() => {
//     resolve('setTimeout1')
//     console.log(5);
//   }, 0);
// }).then((data) => {
//   console.log(data);
// })

// console.log(6);



// 今日头条笔试题
// async function async1() {
//   console.log('async1 start');
//   await async2()
//   console.log('async1 end');
// }

// async function async2() {
//   console.log('async2');
// }

// console.log('script start');

// setTimeout(() => {
//   console.log('setTimeout');
// }, 0);

// async1()
