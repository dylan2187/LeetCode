function getParams(url) {
  let res = {}
  if (url.includes('?')) {
    let str = url.split('?')[1]
    let arr = str.split('&')
    for (let item of arr) {
      let key = item.split('=')[0]
      let value = item.split('=')[1]
      res[key] = decodeURIComponent(value)
    }
  }
  return res
}

function getParams1(url) {
  let map = new Map()
  if (url.includes('?')) {
    let params = url.split('?')[1]
    let arr = params.split('&')
    for (let item of arr) {
      let [key, value] = item.split('=')
      map.set(key, value)
    }

  }
  return map

}

let result = getParams1('http://www.baidu.com?user=%E9%98%BF%E9%A3%9E&age=16')
console.log(result)


