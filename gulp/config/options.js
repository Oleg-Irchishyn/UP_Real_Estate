const webpackStream = require('webpack-stream');
const webpack = webpackStream.webpack;
const pathPlugin = require('path');
const WebpackOnBuildPlugin = require('on-build-webpack');
const browserSync = require("browser-sync");
const reload = browserSync.reload;
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')

// const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
let options = {
  config: { // Gulp options to configure project 
    checkChanged: true, // Check if files where before so compile only changed files 
    minifyHTML: true, // on prod stage
    minifyCSS: true, // on prod stage
    uglifyJS: true, //  disabled
    concatJS: false, //  disabled
    minifyPHP: true, // on prod stage , https://github.com/cedx/gulp-php-minify doc
    showGulpDebug: true, // shows gulp debug messages in terminal
    nunjucksOn: true, // if false html will be build by rigger 
    // removeJsConsoleLogDev: false, // true to delete all console.log
    // removeJsConsoleLog: false , // true to delete all console.log
    showSizes: true, // in gulp config show size of files 
    cssSourcemap: true, // build css sourcemap 
    pngSprite: '../img/sprite.png', // path to image that should know css . Default -  '../img/sprite.png'
    pngSpriteRetina: '../img/sprite@2x.png' // path to retina image that should know css . Default -  '../img/sprite@2x.png'
  },
  BrowserSyncConfig: { // documentation https://browsersync.io/docs/options
    server: { baseDir: "./dev/" },
    tunnel: false,
    host: 'localhost',
    port: 9451,
    open: false,
    notify: true,
    scrollProportionally: false,
    logPrefix: "Frontend",
  },
  webpackConfig: {
    watch: true,
    module: {
      rules: [
        {
          test: /\.js$/,
          // include: pathPlugin.join(__dirname, 'src'),
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader'
          }
        }
      ],
    },
    plugins: [
      new webpack.NoEmitOnErrorsPlugin(),
      new WebpackOnBuildPlugin(function (stats) {
        browserSync.reload()
      }),
    ]
  },
  webpackConfigProd: {
    module: {
      rules: [
        {
          test: /\.js$/,
          // include: pathPlugin.join(__dirname, 'src'),
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader'
          }
        }
      ],
    },
    // resolve: {
    //   extensions: ['*', '.js', '.jsx']
    // },
    plugins: [ // list - https://github.com/webpack/docs/wiki/list-of-plugins
      new UglifyJSPlugin({}, {
        output: { comments: false },
        compress: {
          warnings: false, // remove warnings
          drop_console: true // Drop console statements
        },
      }),
      new webpack.NoEmitOnErrorsPlugin(),
    ]
  },
  htmlMinOptions: { // documentation https://github.com/kangax/html-minifier 
    collapseWhitespace: false,
    collapseInlineTagWhitespace: true,
    removeComments: true,
    minifyJS: true,
    caseSensitive: true
  }
};

module.exports = options