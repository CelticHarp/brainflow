const addon = require('bindings')('greeting'); // import 'greeting.node'
exports.greetHello = addon.greetHello;
