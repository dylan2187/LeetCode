const target = {
  num: 117,
}
const source = {
  count: 935,
  wrapper: {
    name: 'Jhon',
  },
}

const res = Object.assign(target, source)
source.wrapper.name = 'wangkia'
console.log(res)
