var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var config = {
  resolve: {
    alias: {
      components: path.resolve(__dirname, './src/components'),
    },
  },
  entry: {
    main: './src/main'
  },
  output: {
    //打包输出目录
    path: path.resolve(__dirname + '/dist'),

    // publicPath: '/dist/',

    //打包输出文件名
    filename: 'buddle.js'
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.css$/,
        use: [
          // 'style-loader',
          'vue-style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.scss$/,
        use: [
          // 'style-loader',
          'vue-style-loader',
          'css-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader'
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader'
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      // template: './src/index.html' // html在src里
      template: 'index.html' // html在根目录
    }),
    new CopyWebpackPlugin([
      {
        from: path.resolve(__dirname, './node_modules/vue-uieditor/vue-uieditor'),
        to: './vue-uieditor/'
      }
    ])
  ]
  // watch: true, // 是否与package.json里的 webpack --watch 或者 webpack-dev-server功能重复了？
};

module.exports = config;
