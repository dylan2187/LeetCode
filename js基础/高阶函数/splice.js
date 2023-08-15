//splice() 方法用于添加或删除数组中的元素。
//array.splice(index,howmany,item1,.....,itemX)
// let arr = [0, 1, 2, 3, 4, 5, 6]
// arr.splice(2, 0, 'hahah')
// console.log(arr)

var fruits = ['苹果', '香蕉', '草莓', '葡萄']
// splice的作用： 1. 删除 2. 添加 3. 替换（删除后再添加）

// splice会改变原数组

fruits.splice(0, 5, '西瓜')
console.log(fruits)
