// 获取完整的URL
var url =
  'http://10.10.102.198:8421/?token=eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyIjoie1widXVpZFwiOlwiRTA0RjdBMjAtMTUzRC0zNjdCLThDNDMtNjU0QjAyMkRBOTE4XCIsXCJ1c2VybmFtZVwiOlwiZGFtaVwiLFwicGFzc3dvcmRcIjpcImUxMGFkYzM5NDliYTU5YWJiZTU2ZTA1N2YyMGY4ODNlXCIsXCJhdmF0YXJcIjpudWxsLFwicGhvbmVcIjpcIjEzMzEyMzQxMjM0XCIsXCJlbWFpbFwiOlwiZGFtaUBnY3p4LmNuXCIsXCJkaXNwbGF5X25hbWVcIjpcIuWkp-exs1wiLFwiY3JlYXRlX3RpbWVcIjpcIjIwMjMtMDctMjQgMDk6NTE6MDAuMFwiLFwic3RhdHVzXCI6MX0iLCJleHAiOjE2OTEyMDI1NTh9.pNUULyAgViG3Rr67OgHVjwaGKASsWzonjesJRKidVE4#/main'

// 创建URLSearchParams对象
var params = new URLSearchParams(url.split('?')[1].split('#')[0])

// 获取token字段的值
var token = params.get('token')

console.log(token)
