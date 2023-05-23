const endTime = new Date('2024/01/01')
function updateTime() {
  const startTime = new Date()
  const diff = endTime - startTime

  const day = Math.floor(diff / (1000 * 60 * 60 * 24))
  const hour = Math.floor((diff / (1000 * 60 * 60)) % 24)
  const min = Math.floor((diff / (1000 * 60)) % 60)
  const sec = Math.floor((diff / 1000) % 60)
  console.log(`倒计时： ${day}天${hour}小时${min}分钟${sec}秒`)
}

setInterval(() => {
  updateTime()
}, 1000)
