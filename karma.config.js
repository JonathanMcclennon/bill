var webpack = require('karma-webpack');
var webpackConfig = require('./webpack.config.js');

webpackConfig.entry = {};

module.exports = function (config) {
  config.set({
    browsers: ['PhantomJS'],
    singleRun: true,
    frameworks: ['jasmine'],
    files: [
        'tests/**/*.spec.js'
    ],
    preprocessors: {
      'tests/**/*.spec.js': ['webpack']
    },
    babelPreprocessor: {
      options: {
        presets: ['es2015']
      }
    },
    reporters: [ 'dots' ],
    webpack: webpackConfig,
    resolve: {
        extensions: ['', '.js']
    },
    webpackServer: {
      noInfo: true
    }
  });
};
