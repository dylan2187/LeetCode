// 使用js解决这道题
// 一名化学家正在研究一些新配制的液体。他找来了一个空瓶子，准备依次往里面倒入n种不同的液体。每一次导入的液体的体积相同，但是不同液体的密度可能不同。这些液体大多不能互溶，密度越大的液体在瓶子中也就越靠近瓶子的底部。每一种液体都有特殊的性质，在倒入时会与瓶中从上往下前ki层液体互溶，之后形成新的液体。新液体的密度为这ki+1个液体的平均并向上取整。
// 例如，当前瓶中的液体密度从底部开始为8，6，6，5，3，之后来了一个密度为 20，ki=2的液体，那么其会与密廈为5和3的液体互溶，形成新的液体的密度为 (20+5+3)/3=10（向上取整），之后这部分液体沉到瓶中最底部，于是瓶中液体密度从底部开始分别为 10，8，6，6。如果瓶中液体层数不足 ki，此时新倒入液体会与瓶中所有液体互溶。
// 你需要模拟这个过程，并最后输出瓶中所有液体的密度。
// 输入正整数n，长度为n的数组p表示依次倒入的液体密度，长度为n的数组k表示依次倒入液体的特征值。
// 样例：当输入n=5，p=[5, 6, 4, 9, 9]，k=[0, 0, 1, 0, 2]，输出为9 7
// 提示：对于样例来说，首先最底层是6 5 两种液体，然后添加密度为4的液体，与5相融，得到的新液体密度是(4+5)/2=5，当前瓶中有两种液体，分别是 6，5；再添加密度是9的液体， 不与任何液体相融，但会因为密度最大被移动到最下层，当前瓶中的液体密度分别是9，6，5。 再添加密度是9的液体，与最上面两层相溶，新液休密度是(6+5+9)/3=7。因此瓶中的液体密度从下到上为9和7

function liquidDensity(n, p, k) {
  let densities = []

  for (let i = 0; i < n; i++) {
    let currentDensity = p[i]
    let ki = k[i]

    let mixDensities = [currentDensity]

    while (ki-- > 0 && densities.length > 0) {
      mixDensities.push(densities.pop())
    }

    // 计算新的液体密度，并将其添加到瓶子中的液体密度数组中
    let newDensity = Math.ceil(
      mixDensities.reduce((a, b) => a + b, 0) / mixDensities.length
    )
    let j = densities.length - 1
    while (j >= 0 && densities[j] < newDensity) j--
    densities.splice(j + 1, 0, newDensity)
  }

  return densities.join(' ')
}

// const n = parseInt(readline())
// const p = readline()
//   .split(' ')
//   .map((item) => parseInt(item))
// const k = readline()
//   .split(' ')
//   .map((item) => parseInt(item))
// const res = liquidDensity(n, p, k)
// console.log(res)

// 测试样例
let n = 5
let p = [5, 6, 4, 9, 9]
let k = [0, 0, 1, 0, 2]
console.log(Array.isArray(liquidDensity(n, p, k))) // 输出 [9, 7]
