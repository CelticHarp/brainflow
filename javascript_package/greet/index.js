// const greetModule = require('./build/Release/greeting.node');
// console.log('exports : ', greetModule)
// console.log();
// console.log('result', greetModule.greetHello("amalia"));
// console.log();

const addon = require('../build/Release/greeting.node');
// const addon = require('bindings')('greet'); // import 'greet.node'
exports.hello = addon.greetHello;
