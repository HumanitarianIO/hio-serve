var path = require('path')

//
// Builds a file name.
//
var _name = function (year, admin, callback) {
  var filename = 'GAUL_' + year + '_' + admin + '.zip'
  callback(null, filename)
}

//
// Fetches a file from the file system.
//
var FetchGaulFile = function (year, admin, callback) {
  _name(year, admin, function (err, data) {
    if (err) {
      callback(null)
    } else {
      var filepath = path.resolve('static', 'gaul', data)
      callback(null, filepath)
    }
  })
}

//
// Exporting functions.
//
module.exports = {
  _name: _name,
  FetchGaulFile: FetchGaulFile
}
