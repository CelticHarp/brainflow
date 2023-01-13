var ffi = require('ffi-napi')
var ref = require('ref-napi')

// typedefs
var myobj = ref.types.void // we don't know what the layout of "myobj" looks like
var data = ref.refType(myobj);

// var DataFilter = ffi.Library('../compiled/Release/DataHandler.dll', {
//   'get_version_data_handler': [ 'string', [ 'int', 'int', 'int' ] ],
//   'set_log_level_data_handler': [ 'int', [ 'int' ] ],
//   'detect_peaks_z_score': [ 'int', [ data, 'int' , 'int','double','double','double' ] ],
// })

var BoardShim  = ffi.Library('../compiled/Release/BoardController.lib', {
  //'get_version': ['string' , []],
  'set_log_level': ['void', ['int']]
})


var output = BoardShim.set_log_level(1)
console.log('Your output: ' + output)

// if (process.argv.length < 3) {
//   console.log('Arguments: ' + process.argv[0] + ' ' + process.argv[1] + ' <max>')
//   process.exit()
// }

// var output = DataFilter.get_version_data_handler(1,2,3)
// console.log('Your output: ' + output)

// var output = DataFilter.detect_peaks_z_score(null,1, 1, 3, 4, 5)
// console.log('Your output: ' + output)
