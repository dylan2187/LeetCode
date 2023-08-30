function traverseMatrix(matrix) {
  if (matrix.length == 0) return []
  let upper = 0,
    lower = matrix.length - 1,
    leftBoundary = 0,
    rightBoundary = matrix[0].length - 1
  let output = []
  while (true) {
    for (let idx = leftBoundary; idx <= rightBoundary; idx++)
      output.push(matrix[upper][idx])
    if (++upper > lower) break
    for (let idx = upper; idx <= lower; idx++)
      output.push(matrix[idx][rightBoundary])
    if (leftBoundary > --rightBoundary) break
    for (let idx = rightBoundary; idx >= leftBoundary; idx--)
      output.push(matrix[lower][idx])
    if (upper > --lower) break
    for (let idx = lower; idx >= upper; idx--)
      output.push(matrix[idx][leftBoundary])
    if (++leftBoundary > rightBoundary) break
  }
  return output
}

console.log(
  traverseMatrix([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ])
) // Output: [1, 2, 3, 6, 9, 8, 7, 4, 5]
