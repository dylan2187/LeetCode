let nums = [3, 1, 2, 5]
try {
  nums.forEach(function (item, index) {
    if (item == 2) {
      throw new Error('yo'); //结束整体循环
    }
    console.log(item);
  }

  )
} catch (e) {
  if (e.message != 'yo') {
    throw e
  }

}