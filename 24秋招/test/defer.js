export function useDefer(maxCount) {
  // 使用响应式数据进行计算 当前渲染的帧数
  const frameCount = ref(0)
  function updateFrameCount() {
    requestAnimationFrame(() => {
      frameCount.value++
      if (maxCount) {
        return
      }
      updateFrameCount() //递归调用这个函数
    })
  }
  updateFrameCount()
  return function defer(n) {
    return 当前渲染的帧数 >= n
    // return frameCount >= n
  }
}
