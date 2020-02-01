const fs = require('fs')


function getFileByPath(fpath) {
  return new Promise(function (resolve, reject) {
    fs.readFile(fpath, 'utf-8', (err, dataStr) => {

      if(err) return reject(err)
      resolve(dataStr)

    })
  })
}



// 如果前面的 Promise 执行失败，我们不想让后续的Promise 操作被终止，可以为 每个 promise 指定 失败的回调
getFileByPath('./files/01.txt')

  .then(function(data) {
    console.log(data);
    // 读取文件 02
    return getFileByPath('./files/02.txt')
  }, function(err) {
    console.log('读取文件 01 失败：' + err.message);
    // return 一个新的 Promise
    return getFileByPath('./files/02.txt')
  })

  .then(function (data) {
    console.log(data);
    return getFileByPath('./files/03.txt')
  },function(err) {
    console.log('读取文件 02 失败：' + err.message);
    // return 一个新的 Promise
    return getFileByPath('./files/03.txt')
  })

  .then(function(data) {
    console.log(data);
  })

  console.log('OKOKOK');


  // 终端执行命令：node .\01.使用Promise解决回调地狱(1).js 
