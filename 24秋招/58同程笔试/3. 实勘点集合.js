// 在房产业务里，实勘是一个很重要的环节——即线下实地勘测房源信息，以提供更加真实有效的房源信息。那么，实勘人员的工作效率就变得尤为重要。目前，针对实勘人员需要设计一个系统来提升实勘效率，其中有一个这样功能：
// 每名实勘人员根据所在当前地理位置会有一个可实勘的实勘点池子，系统需要挑选出实勘人员在每天实勘距离达标情况下可以实勘点的列表，并推荐给实勘人员进行当日的实勘工作。
// 假设，实勘人员A可以实勘的池子是一个数组：surveyPosArr=[10，1，2，7，6，1， 1，5]，数组里面的值代表与他的距离，每日需要达标的实勘总距离值为8，从效率的角度来看，需要找到池子里满足达标距离情况下的最多的实勘点组合，并以数组的形式返回。
// 举例说明，surveyPosArr =[10，1，2，7，6，1，1，5]， totalDistance = 8， 满足条件的结果为[1，1，6]，[1，2，5]，[1，1，1，5]， [2，6]， [1，7]，返回的结果应该为最长的那一个组合：[1，1，1，5]。
// (ps：出现多个相同结果的情况下返回全部)
function findCombinations(surveyPosArr, totalDistance) {
  const res = []
  surveyPosArr.sort((a, b) => a - b)
  findTarget(surveyPosArr, totalDistance, 0, [], res)
  // 找出长度最长的组合
  let maxLength = 0
  let output = []
  for (let i = 0; i < res.length; i++) {
    if (res[i].length > maxLength) {
      maxLength = res[i].length
      output = [res[i]]
    } else if (res[i].length === maxLength) {
      output.push(res[i])
    }
  }
  return output
}

function findTarget(nums, target, start, path, res) {
  if (target < 0) return
  if (target === 0) {
    res.push([...path])
    return
  }
  for (let i = start; i < nums.length; i++) {
    if (i > start && nums[i] === nums[i - 1]) continue // 跳过重复
    path.push(nums[i])
    findTarget(nums, target - nums[i], i + 1, path, res)
    path.pop()
  }
}
const candidates = [10, 1, 2, 7, 6, 1, 5]
const target = 8
console.log(findCombinations(candidates, target)) // [[1, 1, 1, 5]]
// console.log(findCombinations([10, 1, 2, 7, 6, 1, 1, 5], 8)) // [[1, 1, 1, 5]]
