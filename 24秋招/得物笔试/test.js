function arrange(name) {
  let tasks = []

  function wait(time) {
    tasks.push(() => {
      return new Promise((resolve) => {
        setTimeout(() => {
          console.log(`Waiting ${time} seconds...`)
          resolve()
        }, time * 1000)
      })
    })

    return {
      wait,
      do: action,
      execute,
    }
  }

  function action(task) {
    tasks.push(() => {
      console.log(`${name} is ${task}.`)
      return Promise.resolve()
    })

    return {
      wait,
      do: action,
      execute,
    }
  }

  async function execute() {
    for (let task of tasks) {
      await task()
    }
    console.log('Execution completed.')
  }

  return {
    wait,
    do: action,
    execute,
  }
}

arrange('William').wait(5).do('commit').execute()
