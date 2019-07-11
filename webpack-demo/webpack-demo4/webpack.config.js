const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin') //打包html创建
const { CleanWebpackPlugin } = require('clean-webpack-plugin') //清除打包目录
const webpack = require('webpack')

module.exports = {
  mode: 'development',
  devtool: 'inline-source-map',
  entry: './src/index.js',
  output: {
    filename: '[name]-[hash:8].js',
    path: path.resolve(__dirname, 'dist')
  },
  devServer: {
    // 服务启动的目录，默认根目录
    contentBase: './dist',
    // 是否使用热加载
    hot: true,
    // 指定host
    host: 'localhost',
    // 端口
    port: 8800,
    // 当使用 HTML5 History API 时，任意的 404 响应都可能需要被替代为 index.html。通过设置为 true 进行启用
    historyApiFallback: {
      disableDotRule: true
    },
    // 错误提示
    overlay: true,
    /**
     * 在 dev-server 的两种不同模式之间切换
     *   默认情况下，应用程序启用内联模式 inline
     *   设置为 false，使用 iframe 模式，它在通知栏下面使用 <iframe> 标签，包含了关于构建的消息
     */
    inline: true,
    /**
     * 统计信息，枚举类型，可供选项：
     *      "errors-only": 只在发生错误时输出
     *      "minimal": 只在发生错误或有新的编译时输出
     *      "none": 没有输出
     *      "normal": 标准输出
     *      "verbose": 全部输出
     */
    stats: 'errors-only',
    // 设置接口请求代理
    proxy: {
    }
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HTMLWebpackPlugin({
      title: 'webpack 配置',
      template: './public/index.html'
    }),
    new webpack.NamedModulesPlugin(),
    // 进行模块热替换
    new webpack.HotModuleReplacementPlugin()
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              sourceMap: true
            }
          }
        ]
      },
      // 解析图片资源
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          'file-loader'
        ]
      },
      // 解析 字体
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [
          'file-loader'
        ]
      },
      // 解析数据资源
      {
        test: /\.(csv|tsv)$/,
        use: [
          'csv-loader'
        ]
      },
      // 解析数据资源
      {
        test: /\.xml$/,
        use: [
          'xml-loader'
        ]
      },
      // 解析 MakeDown 文件
      {
        test: /\.md$/,
        use: [
          "html-loader",
          "markdown-loader"
        ]
      },
      {
        test: /\.js/,
        include: path.resolve(__dirname, 'src'),
        loader: 'babel-loader?cacheDirectory',
      }
    ]
  }
}