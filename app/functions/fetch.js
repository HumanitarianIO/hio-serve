var fs = require('fs')
var path = require('path')

//
// Builds a file name.
//
_name = function (year, admin, callback) {
  var filename = 'GAUL_' + year + '_' + admin + '.zip'
  callback(null, filename)
}

//
// Fetches a file from the file system.
//
FetchGaulFile = function (year, admin, callback) {
  _name(year, admin, function (err, data) {
    var filepath = path.resolve('static', 'gaul', data)
    callback(null, filepath)
  })
}

//
// Exporting functions.
//
module.exports = {
  _name: _name,
  FetchGaulFile: FetchGaulFile
}
