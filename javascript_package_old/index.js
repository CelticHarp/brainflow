const addon = require('bindings')('greet'); // import 'greet.node'
exports.greetHello = addon.greetHello;
