// 实现一个 arrange 函数，可以进行时间和工作调度
//[>...]表示调用函数后打印的内容

// arrange('William').execute()
// > William is notified

// arrange('William').do('commit').execute()
// > William is notified
// > Start to commit

// arrange('William').wait(5).do('commit').execute()
// > William is notified
// 等待5秒
// > Start to commit

// arrange('William').waitFirst(5).do('push').execute()
// 等待5秒
// > William is notified
// > Start to push

// function arrange(){
//   //此处写代码逻辑
// }

function arrange(name) {
  let delay = 0
  let tasks = []

  const execute = () => {
    console.log(`${name} is notified`)
    tasks.forEach((task, index) => {
      setTimeout(() => {
        console.log(task)
      }, delay * (index + 1) * 1000)
    })
  }

  const doTask = (task) => {
    tasks.push(`Start to ${task}`)
    return {
      execute,
    }
  }

  const wait = (seconds) => {
    delay = seconds
    return {
      execute,
    }
  }

  const waitFirst = (seconds) => {
    delay = seconds
    console.log(`Waiting for ${seconds} seconds`)
    return {
      do: doTask,
    }
  }

  return {
    execute,
    do: doTask,
    wait,
    waitFirst,
  }
}

//测试代码
// arrange('William').execute()
// > William is notified

arrange('William').do('commit').execute()
// > William is notified
// > Start to commit

// arrange('William').wait(5).do('commit').execute()
// > William is notified
// 等待5秒
// > Start to commit

// arrange('William').waitFirst(5).do('push').execute()
// 等待5秒
// > William is notified
// > Start to push
