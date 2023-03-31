var seconds = 12000

var h = parseInt(seconds / 3600)
seconds = seconds % 3600

var m = parseInt(seconds / 60)
seconds = seconds % 60

var s = seconds

console.log(`${h}hour ${m}min ${s}seconds`);