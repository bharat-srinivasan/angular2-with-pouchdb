// SystemJS configuration file, see links for more information
// https://github.com/systemjs/systemjs
// https://github.com/systemjs/systemjs/blob/master/docs/config-api.md

/***********************************************************************************************
 * User Configuration.
 **********************************************************************************************/
/** Map relative paths to URLs. */
const map: any = {};

/** User packages configuration. */
const packages: any = {};

const barrels: string[] = [
  // Thirdparty barrels.
  'rxjs',

  // App specific barrels.
  '@robusta', '@robusta/shared', '@robusta/logging'
  /** @cli-barrel */
];

const cliSystemConfigPackages: any = {};
barrels.forEach((barrelName: string) => {
  cliSystemConfigPackages[ barrelName ] = { main: 'index' };
});

/** Type declaration for ambient System. */
declare var System: any;

// Apply the CLI SystemJS configuration.
System.config({
  paths: {
    // paths serve as alias
    'npm:': 'node_modules/'
  },
  map: {
    // angular bundles
    '@angular/core': 'npm:@angular/core/bundles/core.umd',
    '@angular/common': 'npm:@angular/common/bundles/common.umd',
    '@angular/compiler': 'npm:@angular/compiler/bundles/compiler.umd',
    '@angular/platform-browser': 'npm:@angular/platform-browser/bundles/platform-browser.umd',
    '@angular/platform-browser-dynamic': 'npm:@angular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd',
    '@angular/http': 'npm:@angular/http/bundles/http.umd',
    '@angular/forms': 'npm:@angular/forms/bundles/forms.umd',

    // angular testing umd bundles
    '@angular/core/testing': 'npm:@angular/core/bundles/core-testing.umd',
    '@angular/common/testing': 'npm:@angular/common/bundles/common-testing.umd',
    '@angular/compiler/testing': 'npm:@angular/compiler/bundles/compiler-testing.umd',
    '@angular/platform-browser/testing': 'npm:@angular/platform-browser/bundles/platform-browser-testing.umd',
    '@angular/platform-browser-dynamic/testing': 'npm:@angular/platform-browser-dynamic/bundles/platform-browser-dynamic-testing.umd',
    '@angular/http/testing': 'npm:@angular/http/bundles/http-testing.umd',
    '@angular/router/testing': 'npm:@angular/router/bundles/router-testing.umd',
    '@angular/forms/testing': 'npm:@angular/forms/bundles/forms-testing.umd',
    'rxjs': 'npm:rxjs',

    // PouchDB and dependent Libraries
    'pouchdb-browser': 'npm:pouchdb-browser/lib/index',
    'lie': 'npm:lie/dist/lie.min',
    'argsarray': 'npm:argsarray/index',
    'debug': 'npm:debug/debug',
    'events': 'npm:events/events',
    'ms': 'npm:ms/index',
    'inherits': 'npm:inherits/inherits_browser',
    'vuvuzela': 'npm:vuvuzela/dist/vuvuzela.min',
    'es6-promise-pool': 'npm:es6-promise-pool/es6-promise-pool',
    'spark-md5': 'npm:spark-md5/spark-md5.min',
    'scope-eval': 'npm:scope-eval/scope_eval'
  },
  packages: cliSystemConfigPackages,
  defaultJSExtensions: true
});

// Apply the user's configuration.
System.config({ map, packages });
