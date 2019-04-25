const BrowserSyncPlugin = require('browser-sync-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const merge = require('webpack-merge');
const WebpackNotifierPlugin = require('webpack-notifier');
const WriteFilePlugin = require('write-file-webpack-plugin');
const path = require('path');
const Webpack = require('webpack');
const InjectHtmlWebpackPlugin = require('inject-html-webpack-plugin');
const common = require('./webpack.common');

module.exports = merge(common, {

  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist',
    historyApiFallback: true,
    watchOptions: {
      aggregateTimeout: 300,
      poll: 1000
    },
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
      "Access-Control-Allow-Headers": "X-Requested-With, content-type, Authorization"
    }
  },
  externals: {
    jquery: 'jQuery',
  },
  module: {
    rules: [{
        test: /[\/\\]node_modules[\/\\]some-module[\/\\]index\.js$/,
        loader: "imports?this=>window"
      },
      {
        test: /[\/\\]node_modules[\/\\]some-module[\/\\]index\.js$/,
        loader: "imports?define=>false"
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'postcss-loader']
        })
      },
      {
        test: /\.s[ac]ss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [{
              loader: 'css-loader',
              options: {
                sourceMap: true,
                url: true,

              }
            },
            {
              loader: 'postcss-loader',
              options: {
                sourceMap: true
              }
            },
            {
              loader: 'sass-loader',
              options: {
                sourceMap: true,
                url: true,
                sass: 'node-sass',
              }
            },

          ]
        })
      },
    ],
  },
  resolve: {
    alias: {
      // 'assets': path.resolve('src/img')
      'img': path.resolve('src/img/')
    },
  },

  plugins: [
    new Webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      "window.jQuery": "jquery"
    }),
    // https://www.npmjs.com/package/webpack-notifier
    new WebpackNotifierPlugin({
      // alwaysNotify: false,
      excludeWarnings: true,
      title: 'Notification WebPack',
      skipFirstNotification: true
    }),
    // https://github.com/gajus/write-file-webpack-plugin
    new WriteFilePlugin({
      useHashIndex: true,
    }),


    //   // https: //github.com/Va1/browser-sync-webpack-plugin
    new BrowserSyncPlugin(
      // BrowserSync options
      {
        host: 'localhost',
        port: 3001,
        proxy: 'http://web-design.test:3000/',
        browser: "default",
        notify: false,
      }, {
        reload: true,
      },
    ),
  ],
  // optimization: {
  //   splitChunks: {
  //     chunks: 'all',
  //   },
  // },
  // optimization: {
  //   runtimeChunk: 'single',
  //   splitChunks: {
  //     chunks: 'all',
  //     maxInitialRequests: Infinity,
  //     minSize: 0,
  //     cacheGroups: {
  //       vendor: {
  //         test: /[\\/]node_modules[\\/]/,
  //         name(module) {
  //           // get the name. E.g. node_modules/packageName/not/this/part.js
  //           // or node_modules/packageName
  //           const packageName = module.context.match(/[\\/]node_modules[\\/](.*?)([\\/]|$)/)[1];

  //           // npm package names are URL-safe, but some servers don't like @ symbols
  //           return `npm.${packageName.replace('@', '')}`;
  //         },
  //       },
  //     },
  //   },
  // },

  // optimization: {
  //   // Deixaremos false por enquanto para propósitos de demonstração
  //   splitChunks: false,
  // },
  // optimization: {
  //   splitChunks: {
  //     cacheGroups: {
  //       default: false,
  //       test: /node_modules/,
  //       minSize: 50000,
  //       name: 'vendors',
  //     },
  //   },
  // },
  // optimization: {
  //   splitChunks: {
  //     cacheGroups: {
  //       default: false,
  //       // Custom common chunk
  //       bundle: {
  //         name: 'commons',
  //         chunks: 'all',
  //         minChunks: 3,
  //         reuseExistingChunk: false,
  //       },
  //       // Customer vendor
  //       vendors: {
  //         chunks: 'initial',
  //         name: 'vendors',
  //         test: 'vendors',
  //       },
  //       // Merge all the CSS into one file
  //       styles: {
  //         name: 'styles',
  //         test: /\.s?css$/,
  //         chunks: 'all',
  //         enforce: true,
  //       },
  //     },
  //   },
  // },
});