var ffi = require('ffi-napi')

var brainflow = ffi.Library('../compiled/Release/DataHandler.dll', {
  //'get_version_data_handler': [ 'string', [ 'string', 'int', 'int' ] ],
  'set_log_level_data_handler': [ 'int', [ 'int' ] ],
})
// var brainflow = ffi.Library('../python_package/brainflow/lib/MuseLib.dll', {
//   'get_version': []
// })


// if (process.argv.length < 3) {
//   console.log('Arguments: ' + process.argv[0] + ' ' + process.argv[1] + ' <max>')
//   process.exit()
// }

//var output = libfactorial.factorial(parseInt(process.argv[2]))
var output = brainflow.set_log_level_data_handler(1)

console.log('Your output: ' + output)