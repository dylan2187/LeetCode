async function a() {
  console.log('a')
}

async function b() {
  console.log('b')
  await a()
  console.log('c')
}
async function main() {
  console.log('m')
  b()
}
main()

// 为什么是mbac
