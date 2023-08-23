function arrange(name) {
  let tasks = []
  let waitTime = 0

  function executeTask(task) {
    setTimeout(() => {
      console.log(`Start to ${task}`)
    }, waitTime * 1000)
    waitTime += 1
  }

  function execute() {
    console.log(`${name} is notified`)
    tasks.forEach((task) => executeTask(task))
  }

  function doTask(task) {
    tasks.push(task)
    return this
  }

  function wait(seconds) {
    waitTime += seconds
    return this
  }

  function waitFirst(seconds) {
    waitTime = seconds
    return this
  }

  return {
    execute,
    do: doTask,
    wait,
    waitFirst,
  }
}

// Example usage:
// arrange('William').execute()
// > William is notified

// arrange('William').do('commit').execute()
// > William is notified
// > Start to commit

// arrange('William').wait(5).do('commit').execute()
// > William is notified
// 等待5秒
// > Start to commit

arrange('William').waitFirst(5).do('push').execute()
// 等待5秒
// > William is notified
// > Start to push
