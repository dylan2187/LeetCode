现在有一个页面需要在页面初始化前对一批资源进行预请求，请实现预请求函数 preload，要求并发请求数量不超过5个，请求失败需要重试，单个资源最多重试3 次，超出限制时抛出异常，并停止后续请求。
方法定义：
proload(url: string[]) => Promise<void>

示例：
preload([url1, url2,...])
.then(()=>{
  //预请求完成，开始初始化页面
})
.catch((error)=>{
  //预请求失败
})


好的，这道题可以用Promise和async/await来实现。

首先我们需要定义一个异步请求函数，用于对单个资源进行请求，最多重试三次。

/**
 * 发送异步请求，最多重试3次
 * @param {string} url 资源的URL
 * @return {Promise<void>} 请求成功时返回一个空Promise对象
 * @throws 如果请求失败且超过重试次数，则抛出一个异常
 */
async function request(url) {
  let retryCount = 0;
  const maxCount = 3
  while (retryCount < maxCount) {
    try {
      await fetch(url);
      return Promise.resolve();
    } catch (e) {
      retryCount++;
    }
  }
  throw new Error(`Request ${url} failed after ${maxCount} times`);
}

然后我们需要实现一个preload函数，并发请求数量不超过5个。

/**
 * 预请求函数，用于对一批资源进行预请求
 * @param {string[]} urls 资源URL的数组
 * @param {number} maxConcurrent 最大并发请求数量，默认为5
 * @return {Promise<void>} 预请求成功时返回一个空Promise对象
 * @throws 如果预请求失败，则抛出一个异常
 */
async function preload(urls, maxConcurrent = 5) {
  const inProgress = new Set();
  const queue = [...urls];
  let concurrent = 0;

  function handleComplete(url) {
    inProgress.delete(url);
    while (concurrent < maxConcurrent && queue.length > 0) {
      const nextUrl = queue.shift();
      sendRequest(nextUrl);
    }

    if (inProgress.size === 0 && queue.length === 0) {
      return Promise.resolve();
    }
  }

  async function sendRequest(url) {
    inProgress.add(url);
    concurrent++;

    try {
      await request(url);
      concurrent--;
      handleComplete(url);
    } catch (e) {
      handleComplete(url);
      throw e;
    }
  }

  // 发送前5个请求
  for (let i = 0; i < maxConcurrent && queue.length > 0; i++) {
    const url = queue.shift();
    sendRequest(url);
  }

  return new Promise((resolve, reject) => {
    inProgress.on('error', err => {
      reject(err);
    });
    inProgress.on('end', () => {
      resolve();
    });
  });
}

在preload函数中，我们使用一个Set来存储正在处理中的Promise对象。我们初始化队列，然后循环发送前5个请求，每次发送请求时都会将URL加入inProgress。

在请求成功或失败后需要调用handleComplete函数，更新inProgress和queue的状态。如果当前并发请求数量小于最大并发请求数量并且queue中还有待发送的请求，则发送一个新的请求。

最后，我们返回一个Promise对象，等待所有请求处理完毕。如果发生了异常，则直接reject，否则resolve。