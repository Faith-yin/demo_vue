const fs = require('fs')


function getFileByPath(fpath) {
  return new Promise(function (resolve, reject) {
    fs.readFile(fpath, 'utf-8', (err, dataStr) => {

      if(err) return reject(err)
      resolve(dataStr)

    })
  })
}



// 有时候，我们有这样的需求，个上面的需求刚好相反：如果 后续的Promise 执行，依赖于
// 前面 Promise 执行的结果，如果前面的失败了，则后面的就没有继续执行下去的意义了，
// 此时，我们想要实现，一旦有报错，则立即终止所有 Promise的执行；
getFileByPath('./files/01.txt')
  .then(function (data) {
    console.log(data)

    // 读取文件2
    return getFileByPath('./files/02.txt')
  })
  .then(function (data) {
    console.log(data)

    return getFileByPath('./files/03.txt')
  })
  .then(function (data) {
    console.log(data)
  })

  // catch 的作用： 如果前面有任何的 Promise 执行失败，则立即终止所有 promise 的执行，并 马上进入 catch 去处理 Promise中 抛出的异常；
  .catch(function (err) { 
    console.log('这是自己的处理方式：' + err.message)
  })







  // 终端执行命令：node .\02.使用Promise解决回调地狱(2).js 