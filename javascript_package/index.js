const greetModule = require('./build/Release/greeting.node');
console.log('exports : ', greetModule)
console.log();
console.log('result', greetModule.greetHello("amalia"));
console.log();