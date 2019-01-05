const helpers = require('./helpers')
const webpackConfig = require('./webpack.config.base')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const DefinePlugin = require('webpack/lib/DefinePlugin')
const env = require('../environment/dev.env')

webpackConfig.module.rules = [...webpackConfig.module.rules,
  {
    test: /\.scss$/,
    use: [{
      loader: 'style-loader'
    },
    {
      loader: 'css-loader'
    },
    {
      loader: 'sass-loader'
    }
    ]
  },
  {
    test: /\.(jpg|png|gif|eot|svg|ttf|woff|woff2)$/,
    loader: 'file-loader'
  }
]

webpackConfig.plugins = [...webpackConfig.plugins,
  new HtmlWebpackPlugin({
    inject: true,
    template: helpers.root('/src/index.html'),
    favicon: helpers.root('/src/favicon.ico')
  }),
  new DefinePlugin({
    'process.env': env
  })
]

webpackConfig.devServer = {
  port: 8080,
  host: "localhost",
  historyApiFallback: true,
  headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
      "Access-Control-Allow-Headers": "X-Requested-With, content-type, Authorization"
  },
  watchOptions: {aggregateTimeout: 300, poll: 1000},
  contentBase: './src',
  open: true,
  proxy: {
      "/api/*": "http://127.0.0.1:3001"
  }
};


module.exports = webpackConfig
