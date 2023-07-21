// https://mail.qq.com/cgi-bin/frame_html?sid=vwQnljhpSZAlUWkN&r=de778e699a6cbfb4de7705decb89484d&lang=zh
function solution(url) {
  // 判断URL参数是否为空或为undefined
  if (url === '' || url === undefined) {
    return {}
  }
  const index = url.indexOf('?')
  const obj = {}
  if (index === -1) return obj
  const queryStr = url.slice(index + 1)
  const arr = queryStr.split('&')
  for (item of arr) {
    const keyValue = item.split('=')
    obj[keyValue[0]] = keyValue[1]
  }
  return obj
}

const res = solution('https://example.com/?a=1&b=小明')
console.log(res)
