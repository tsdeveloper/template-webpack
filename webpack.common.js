const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
// const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const Webpack = require('webpack');
const WebpackNotifier = require('webpack-notifier');
const InjectHtmlWebpackPlugin = require('inject-html-webpack-plugin');
const HtmlWebpackExternalsPlugin = require('html-webpack-externals-plugin');

const devMode = process.env.NODE_ENV !== 'production'


module.exports = {
  entry: {
    app: './src/js/index.js',
    about: './src/js/about.js',

  },
  externals: {
    jquery: 'jQuery',
  },

  output: {
    filename: '[name].[chunkhash].js',
    path: path.resolve(__dirname, 'dist')
  },
  // devtool: 'source-map',
  module: {

    rules: [{
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /[\/\\]node_modules[\/\\]some-module[\/\\]index\.js$/,
        loader: "imports?this=>window"
      },
      {
        test: /[\/\\]node_modules[\/\\]some-module[\/\\]index\.js$/,
        loader: "imports?define=>false"
      },

      {
        test: /\.tpl$/,
        loader: 'ejs-loader',
        query: {
          interpolate: /\{\{(.+)\}\}/g,
          escape: '<$-(.+?)$>',
          evaluate: /\[\[(.+)\]\]/g,
          engine: 'lodash',
        },
      },
      {
        test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url-loader?limit=10000',

      },
      // {
      //   test: /\.(png|jpg|gif|svg)$/,
      //   exclude: [
      //     path.resolve(__dirname, './src/img'),
      //   ],
      //   use: {
      //     loader: 'file-loader',
      //     options: {
      //       name: '[path][name]-[hash].[ext]',
      //       outputPath: '../',
      //       publicPath: '/dist',
      //     },
      //   },
      // },
      {
        test: /\.(jpg|gif|png|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'file-loader',
        options: {
          name(file) {
            if (process.env.NODE_ENV === 'development') {
              return "img/[name].[hash].[ext]"
            }
            return 'img/[hash].[ext]';

          },
        }
      },

      // {
      //   test: /\.svg$/,
      //   include: [
      //     path.resolve(__dirname, './node_modules'),
      //   ],
      //   use: {
      //     loader: 'svg-inline-loader',
      //     options: {
      //       name: '[name]-[hash].[ext]',
      //     },
      //   },
      // },


      // {
      //   test: /\.(jpg|gif|png|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
      //   loader: 'url-loader?limit=10000',
      // },

      // {
      //     test: /\.css$/,
      //     use: [
      //         process.env.NODE_ENV !== 'production' ? 'style-loader' : MiniCssExtractPlugin.loader,
      //         {
      //             loader: 'style-loader',
      //             options: {
      //                 sourceMap: true
      //             }
      //         },
      //         {
      //             loader: 'css-loader',
      //             options: {
      //                 url: true,
      //                 sourceMap: true
      //             }
      //         },
      //         {
      //             loader: 'postcss-loader',
      //             options: {
      //                 sourceMap: true
      //             }
      //         },
      //     ]
      // },
      // {
      //     test: /\.s?[ac]ss$/,
      //     use: [
      //         process.env.NODE_ENV !== 'production' ? 'style-loader' : MiniCssExtractPlugin.loader,
      //         {
      //             loader: 'style-loader',
      //             options: {
      //                 sourceMap: true
      //             }
      //         },
      //         {
      //             loader: 'css-loader',
      //             options: {
      //                 url: true,
      //                 sourceMap: true
      //             }
      //         },
      //         {
      //             loader: 'postcss-loader',
      //             options: {
      //                 sourceMap: true
      //             }
      //         },
      //         {
      //             loader: 'sass-loader',
      //             options: {
      //                 url: true,
      //                 sourceMap: true
      //             }
      //         }
      //     ],
      // },

      // {
      //     test: /\.sass$/,
      //     use: ExtractTextPlugin.extract({
      //         fallback: 'style-loader',
      //         use: ['css-loader', 'postcss-loader', 'sass-loader']
      //     })

      // },
      // {
      //     test: /\.(jpe?g|png|gif|svg|mp4)$/i,
      //     use: [{
      //         loader: 'file-loader',
      //         options: {},
      //     }, ]
      // },

      // Copy static assets over with file-loader
      // {
      //   test: /\.(ico)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
      //   loader: 'file-loader',
      //   options: {
      //     name: 'icons/[name].[ext]'
      //   },
      // },
      // {
      //   test: /\.(woff|woff2|eot|ttf|otf)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
      //   loader: 'file-loader',
      //   options: {
      //     name: 'fonts/[name].[ext]'
      //   },
      // },
      // {
      //   test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,
      //   loader: "url?limit=10000&mimetype=application/font-woff"
      // }, {
      //   test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/,
      //   loader: "url?limit=10000&mimetype=application/font-woff"
      // }, {
      //   test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
      //   loader: "url?limit=10000&mimetype=application/octet-stream"
      // }, {
      //   test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
      //   loader: "file"
      // },

      // {
      //   test: require.resolve('jquery'),
      //   use: [{
      //       loader: 'expose-loader',
      //       query: 'jQuery',
      //     },
      //     {
      //       loader: 'expose-loader',
      //       query: '$',
      //     },
      //   ]
      // },


    ]
  },

  stats: {
    // Add warnings
    warnings: false,

    // Filter warnings to be shown (since webpack 2.4.0),
    // can be a String, Regexp, a function getting the warning and returning a boolean
    // or an Array of a combination of the above. First match wins.

  },
  resolve: {
    alias: {
      'img': path.resolve('src/img/')
    },
    extensions: ['.js'],
    // alias: {
    //   'jquery': 'jquery/dist/jquery.js',
    // },
  },
  plugins: [
    // https://www.npmjs.com/package/webpack-notifier

    new CleanWebpackPlugin([path.resolve(__dirname, 'dist')]),
    new Webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      jquery: 'jquery',
      "window.jQuery": "jquery"
    }),
    // // code splitting order chunks:
    // new CommonsChunkPlugin({ name: 'commons' }), // 0, split commons from all entries
    // new CommonsChunkPlugin({ name: 'polyfills', chunks: ['polyfills', 'vendors',], }), // 1
    // new CommonsChunkPlugin({ name: 'vendors', chunks: ['vendors', 'app',], }), // 2
    // // html
    // new HtmlWebpackPlugin({
    //   chunks: [
    //     'commons', // 0
    //     'polyfills', // 1
    //     'vendors', // 2
    //     'app', // rest
    //   ],
    //   ...
    // }),
    // new InjectHtmlWebpackPlugin({
    //   filename: './src/index.php',
    //   chunks: ['app', ],
    //   // processor: "http://cdn.example.com",
    //   custom: [{
    //     startjs: '<!-- start:js -->',
    //     endjs: '<!-- end:js -->',
    //     // content: Date.now()
    //   }]
    // }),

    new HtmlWebpackPlugin({
      // hash: true,
      // title: 'My Awesome application',
      // myPageHeader: 'Hello World',
      template: './src/index.php',
      filename: './index.php', //relative to root of the application
      hash: true,

      chunks: ['app'],
      minify: {
        removeScriptTypeAttributes: true,
      },
    }),
    new HtmlWebpackExternalsPlugin({
      externals: [{
        module: 'jquery',
        entry: 'dist/jquery.min.js',
        global: 'jQuery',
      }, ],
       basedir: 'node_modules',
        dest: 'lib',
    }),
    new HtmlWebpackExternalsPlugin({
      externals: [{
        module: 'font-awesome',
        entry: 'css/font-awesome.min.css',
        supplements: ['fonts/'],
      }, ],
    }),

    // new HtmlWebpackExternalsPlugin({
    //   externals: [{
    //     module: 'jquery',
    //     entry: {
    //       path: 'https://code.jquery.com/jquery-3.2.1.js',
    //       attributes: {
    //         integrity: 'sha256-DZAnKJ/6XZ9si04Hgrsxu/8s717jcIzLy3oi35EouyE=',
    //         crossorigin: 'anonymous',
    //       },
    //     },
    //     global: 'jQuery',
    //   }, ],
    // }),
    // new MiniCssExtractPlugin({
    //     // Options similar to the same options in webpackOptions.output
    //     // both options are optional
    //     filename: '[name].css',
    //     chunkFilename: '[id].css'
    // }),@babelPluginSyntaxDynamicImport

    new ExtractTextPlugin("styles.css"),
    // Set jQuery in global scope
    // https://webpack.js.org/plugins/provide-plugin/


    // new CopyWebpackPlugin([{
    //   from: path.resolve(__dirname, 'src/img'),
    //   to: path.resolve(__dirname, 'dist/img'),
    //   ignore: []
    // }]),
    // new CopyWebpackPlugin([{
    //   from: path.resolve(__dirname, 'src/midias'),
    //   to: path.resolve(__dirname, 'dist/midias/video')
    // }]),
  ],


};