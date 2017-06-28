const helpers = require("./helpers"),
  webpackConfig = require("./webpack.config.base"),
  DefinePlugin = require('webpack/lib/DefinePlugin'),
  env = require('../environment/dev.env');

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

webpackConfig.plugins = [...webpackConfig.plugins,
  new DefinePlugin({
    'process.env': env
  })
]

module.exports = webpackConfig;

