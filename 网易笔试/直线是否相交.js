function judge(a, b, c, d) {
  const temp = (b[1] - a[1]) * (c[0] - d[0]) - (a[0] - b[0]) * (d[1] - c[1])
  if (temp === 0) {
    // 平行
    return false
  }
  const x =
    ((b[0] - a[0]) * (c[0] - d[0]) * (c[1] - a[1]) +
      (b[1] - a[1]) * (c[0] - d[0]) * a[0] -
      (d[1] - c[1]) * (a[0] - c[0]) * b[0]) /
    temp
  const y =
    -(
      (b[1] - a[1]) * (d[0] - c[0]) * (d[1] - a[1]) +
      (b[0] - a[0]) * (d[0] - c[0]) * a[1] -
      (c[1] - d[1]) * (a[0] - c[0]) * b[1]
    ) / temp

  if (x < Math.min(a[0], b[0]) || x > Math.max(a[0], b[0])) {
    return false
  }
  if (x < Math.min(c[0], d[0]) || x > Math.max(c[0], d[0])) {
    return false
  }
  return true
}

judge([0, 0], [5, 5], [5, 6], [6, 7])
