function concurRequest(urls, maxNum) {
  return new Promise((resolve) => {
    if (url.length === 0) {
      resolve([])
      return
    }
    const res = []
    let index = 0 //下一个请求的下标
    let count = 0 //当前请求完成的数量
    //发送请求
    async function request() {
      if (index === url.length) {
        return
      }
      const i = index
      const url = urls[index]
      index++
      console.log(url)
      try {
        const response = await fetch(url)
        //resp加入到 res
        res[i] = response
      } catch (err) {
        //err加入到res
        res[i] = err
      } finally {
        //判断是否所有的请求都已完成
        count++
        if (count === urls.length) {
          resolve(res)
        }
      }
    }
    // const times = Math.min(maxNum, url.length) //最大并发数可能小于urls数组的长度
    for (let i = 0; i < maxNum; i++) {
      request()
    }
  })
}
