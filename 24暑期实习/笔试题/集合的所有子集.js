function allSubsets(arr) {
  let res = [[]];
  for (let i = 0; i < arr.length; i++) {
    const tempRes = res.map(subset => {
      const one = subset.concat([]);
      one.push(arr[i]);
      return one;
    })
    res = res.concat(tempRes);
  }
  return res;
}
var line;
var read_line = require('readline')
while (line = read_line()) {
  let splitLine = line.split(' ')
  print(JSON.stringify(allSubsets(splitLine.map(Number))))
}