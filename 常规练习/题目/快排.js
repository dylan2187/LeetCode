var quickSort = (q, l, r) => {
  if (l >= r) return
  let i = l - 1, j = r + 1, x = q[l + r >> 1]
  while (i < j) {
    do i++; while (q[i] < x)
    do j--; while (q[j] > x)
    if (i < j)
      [q[i], q[j]] = [q[j], q[i]]
  }
  quickSort(q, l, j)
  quickSort(q, j + 1, r)
}

let nums = [3, 1, 2, 5]
quickSort(nums, 0, nums.length - 1)
console.log(nums);
