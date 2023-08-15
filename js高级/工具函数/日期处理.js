var dateTimeString = '2023-07-26 22:56:00.0'
var date = new Date(dateTimeString)
console.log(date)
var year = date.getFullYear()
var month = date.getMonth() + 1 // 注意要加1，因为月份是从0开始计数的
var day = date.getDate()
var dateString = year + '-' + month + '-' + day
console.log(dateString)
