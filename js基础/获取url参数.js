function getUrlParam(sUrl, sKey) {
  // 获取 ? 到 #之间的字符串
  const queryStr =
    sUrl.indexOf('#') === -1
      ? sUrl.slice(sUrl.indexOf('?') + 1)
      : sUrl.slice(sUrl.indexOf('?') + 1, sUrl.indexOf('#'))
  // 根据 "&" 分隔
  const querys = queryStr.split('&')
  // 用 map 来存
  let queryMap = new Map()
  for (query of querys) {
    // query 的 Key
    const key = query.split('=')[0]
    // query 的 value
    const value = query.split('=')[1]
    // 如果 map 里面由重复的 key 就采用一个数组来存
    if (queryMap.has(key)) {
      let temp = [].concat(queryMap.get(key))
      temp.push(value)
      queryMap.set(key, temp)
    } else {
      // 没有重复的就直接设置
      queryMap.set(key, value)
    }
  }
  // 给定的参数有 则返回对应的值
  if (queryMap.has(sKey)) {
    return queryMap.get(sKey)
  } else {
    // 否则 返回 {}
    return {}
  }
}
