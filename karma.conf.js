/*
 * Copyright (c) 2016 General Electric Company. All rights reserved.
 *
 * The copyright to the computer software herein is the property of General Electric Company.
 * The software may be used and/or copied only with the written permission of
 * General Electric Company or in accordance with the terms and conditions stipulated in the
 * agreement/contract under which the software has been supplied.
 */

// Karma configuration file, see link for more information
// https://karma-runner.github.io/0.13/config/configuration-file.html

module.exports = function (config) {
  config.set({
    basePath: './',
    frameworks: ['jasmine'],
    plugins: [
      require('karma-jasmine'),
      require('karma-mocha-reporter'),
      require('karma-phantomjs-launcher')
    ],
    files: [
      {pattern: 'node_modules/systemjs/dist/system.js', included: true, watched: false},

      {pattern: 'node_modules/es6-shim/es6-shim.js', included: true, watched: false},
      {pattern: 'node_modules/reflect-metadata/Reflect.js', included: true, watched: false},

      {pattern: 'node_modules/systemjs/dist/system-polyfills.js', included: true, watched: false},
      {pattern: 'node_modules/@angular/**/*', included: false, watched: false},
      {pattern: 'node_modules/rxjs/**/*', included: false, watched: false},

      {pattern: 'config/karma-test-shim.js', included: true, watched: true},

      {pattern: 'node_modules/zone.js/dist/zone.js', included: true, watched: false},
      'node_modules/zone.js/dist/long-stack-trace-zone.js',
      'node_modules/zone.js/dist/proxy.js',
      'node_modules/zone.js/dist/sync-test.js',
      'node_modules/zone.js/dist/jasmine-patch.js',
      {pattern: 'node_modules/zone.js/dist/async-test.js', included: true, watched: false},
      {pattern: 'node_modules/zone.js/dist/fake-async-test.js', included: true, watched: false},

      {pattern: 'node_modules/pouchdb-browser/lib/index.js', included: false, watched: false},
      {pattern: 'node_modules/lie/dist/lie.min.js', included: false, watched: false},
      {pattern: 'node_modules/argsarray/index.js', included: false, watched: false},
      {pattern: 'node_modules/debug/debug.js', included: false, watched: false},
      {pattern: 'node_modules/events/events.js', included: false, watched: false},
      {pattern: 'node_modules/ms/index.js', included: false, watched: false},
      {pattern: 'node_modules/inherits/inherits_browser.js', included: false, watched: false},
      {pattern: 'node_modules/vuvuzela/dist/vuvuzela.min.js', included: false, watched: false},
      {pattern: 'node_modules/spark-md5/spark-md5.min.js', included: false, watched: false},
      {pattern: 'node_modules/scope-eval/scope_eval.js', included: false, watched: false},
      {pattern: 'node_modules/es6-promise-pool/es6-promise-pool.js', included: false, watched: false},

      // Distribution folder.
      {pattern: 'dist/**/*.spec.ts', included: false, watched: true}
    ],
    exclude: [
      'dist/**/*.d.ts',
      'dist/**/*.json',
      'dist/**/*.ngfactory.*'
    ],
    reporters: ['mocha'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: false,
    browsers: ['PhantomJS'],
    singleRun: true
  });
};
