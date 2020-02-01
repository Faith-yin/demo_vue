const path = require('path')

// 导入在内存中生成 HTML 页面的插件
const htmlWebpackPlugin = require('html-webpack-plugin')



// 配置文件，其实是一个 JS 文件，通过 Node 中的模块操作，向外暴露一个配置对象
module.exports = {
  // 手动指定 入口 和 出口
  // 入口：表示要使用 webpack 打包哪个文件
  entry: path.join(__dirname, './src/main.js'),


  // 出口：输出文件相关的配置，路径 和 文件名称
  output: {
    path: path.join(__dirname, './dist'),
    filename: 'bundle.js'
  },


  // 配置插件的节点，只要是插件，都要放在 plugin 中去
  plugins: [
    new htmlWebpackPlugin({
      // 指定模板页面，将来会根据指定的页面路径，去生成内存中的页面
      template: path.join(__dirname, './src/index.html'),
      // 指定生成的页面的名称
      filename: 'index.html'
    })
  ],

  
  // 用于配置所有第三方模块加载起的节点
  module: {
    // 所有第三方模块的匹配规则
    rules: [
      // 配置处理 .css 文件的第三方loader规则
      { test: /\.css$/, use: ['style-loader', 'css-loader'] },
      // 配置处理 .less 文件的第三方loader规则
      { test: /\.less$/, use: ['style-loader', 'css-loader', 'less-loader'] },
      // 配置处理 .scss 文件的第三方loader规则
      { test: /\.scss$/, use: ['style-loader', 'css-loader', 'sass-loader'] },

      // 处理图片路径的 loader
      // limit 给定的值，是图片的大小，单位是byte，如果我们引用的图片，大于或等于给定的hash值，则
      //  不会被转为base64格式；如果图片小于limit值，则会被转为base64的字符串
      { test: /\.(jpg|png|bmp|jpeg)$/, use: 'url-loader?limit=2757&name=[hash:8]-[name].[ext]' },

      // 处理字体文件的 loader
      { test: /\.(eot|woff|woff2)$/, use: 'url-loader' },
    ]
  }
}
