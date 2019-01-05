const helpers = require('./helpers')
const NamedModulesPlugin = require('webpack/lib/NamedModulesPlugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')

let config = {
  entry: {
    'main': helpers.root('/src/main.ts')
  },
  output: {
    path: helpers.root('/dist'),
    filename: 'js/[name].[hash].js',
    chunkFilename: 'js/[name].[hash].js',
    publicPath: '/'
  },
  devtool: 'source-map',
  resolve: {
    extensions: ['.ts', '.js', '.html'],
    alias: {
      'vue$': 'vue/dist/vue.esm.js'
    }
  },
  module: {
    rules: [{
      test: /\.vue$/,
      loader: 'vue-loader',
    },
    {
      test: /\.ts$/,
      exclude: /node_modules/,
      enforce: 'pre'
    },
    {
      test: /\.ts$/,
      exclude: /node_modules/,
      loader: 'awesome-typescript-loader'
    },
    {
      test: /\.html$/,
      loader: 'raw-loader',
      exclude: ['./src/index.html']
    },
    {
      test: /\.css$/,
      use: [
        'vue-style-loader',
        'css-loader'
      ]
    }
    ]
  },
  plugins: [
    new VueLoaderPlugin(),
    new NamedModulesPlugin(),
    new CopyWebpackPlugin([{
      from: 'src/assets',
      to: './assets'
    } ])
  ]
}

module.exports = config
