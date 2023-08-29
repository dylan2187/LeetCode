const map = new Map()
const wmap = new WeakMap()

;(() => {
  map.set('wangkai', 123)
  wmap.set({ name: 'wangkai' }, 134)
})()

console.log(map)
console.log(wmap)
