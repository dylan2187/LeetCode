function parseURL(url) {
  // 提取协议
  const protocolRegex = /^(.*?):\/\//
  const protocol = url.match(protocolRegex)[1]

  // 提取主机名
  const hostnameRegex = /\/\/(.*?)(\/|$)/
  const hostname = url.match(hostnameRegex)[1]

  // 提取端口号
  const portRegex = /:(\d+)\//
  const portMatch = url.match(portRegex)
  const port = portMatch ? portMatch[1] : ''

  // 提取路径名
  const pathnameRegex = /\/\/.*?\/(.*?)(\?|$)/
  const pathname = url.match(pathnameRegex)[1]

  // 提取查询参数
  const searchRegex = /\?(.*)/
  const searchMatch = url.match(searchRegex)
  const search = searchMatch ? searchMatch[1] : ''

  // 对查询参数进行排序
  const sortedSearch = search.split('&').sort().join('\nsearch:')

  // 输出结果
  console.log(`protocol=${protocol}:`)
  console.log(`hostname=${hostname}`)
  console.log(`port=${port}`)
  console.log(`pathname=/${pathname}`)
  console.log(`search:${sortedSearch}`)
}

// 测试示例输入
const url = 'http://localhost:8080/hello-world?sponsor=dji&group=enterprise'
parseURL(url)
