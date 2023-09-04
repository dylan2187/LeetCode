// 小美想要买糖果店的一根长长的糖果。糖果店顾客可以从中选取一个位置然后老板会在那切断，糖果前端到那个切断位置的糖果就会出售给这位顾客。这个糖果其实不同段有着不同的口味，小美希望她选出来的糖果中各个段有着不同的口味，在这基础上希望能选出尽可能长的糖果。小美想知道她能买到最长多长的糖果，请你帮帮她。

// 其实就是判断有没有重复

function foo(n, nums) {
  let set = new Set()
  let len = 0
  for (let i = 0; i < n; i++) {
    if (!set.has(nums[i])) {
      set.add(nums[i])
      len++
    } else {
      return len
    }
  }
  return len
}

let n = parseInt(readline())
let arr = readline()
  .split(' ')
  .map((item) => parseInt(item))
const res = foo(n, arr)
console.log(res)

let arr = [1, 2, 3, 3, 4]
const res = foo(arr.length, arr)
console.log(res)

function foo(n, sweets) {
  let tasteMap = new Map()
  let start = 0
  let longest = 0

  for (let end = 0; end < n; end++) {
    if (tasteMap.has(sweets[end])) {
      start = Math.max(start, tasteMap.get(sweets[end]) + 1)
    }
    tasteMap.set(sweets[end], end)
    longest = Math.max(longest, end - start + 1)
  }

  return longest
}
