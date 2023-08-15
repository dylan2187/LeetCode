class Drone {
  constructor(name) {
    this.name = name
  }
  fly = () => {
    console.log(this.name + 'fly')
  }
}

const drone = new Drone('nanan')
const { fly } = drone

fly.call({ name: 'wangkai' })
