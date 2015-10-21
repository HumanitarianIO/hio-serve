module.exports = function (app, config) {
  var http = require('http')
  var moment = require('moment')
  var Fetch = require('./functions/fetch')

  //
  // Memory object.
  //
  var gaul = {
    'year': null,
    'admin': 'all'
  }

  app.get('/status', function (req, res) {
    var payload = {
      'online': true,
      'message': config.description,
      'version': config.version,
      'repository': config.repository
    }
    res.send(payload)
  })

  //
  // GAUL parameters.
  //
  app.param('gaul_year', function (req, res, next, year) {
    gaul.year = year
    next()
  })

  app.param('gaul_admin', function (req, res, next, admin) {
    gaul.admin = admin
    next()
  })

  //
  // GAUL endpoints.
  //
  app.get('/gaul/:gaul_year', function (req, res, next) {
    FetchGaulFile(gaul.year, gaul.admin, function (err, filename) {
      console.log(gaul)
      if (err) {
        console.log(err)
        var payload = {
          'message': 'File not found.',
          'error': err
        }
        res.send(payload)
      } else {
        res.set('Content-Type', 'application/zip')
        res.sendFile(filename, function (err) {
          console.log('File sent:', filename)
        })
      }
    })
  })

  app.get('/gaul/:gaul_year/:gaul_admin', function (req, res, next) {
    FetchGaulFile(gaul.year, gaul.admin, function (err, filename) {
      if (err) {
        console.log(err)
        var payload = {
          'message': 'File not found.',
          'error': err
        }
        res.send(payload)
      } else {
        res.set('Content-Type', 'application/zip')
        res.sendFile(filename, function (err) {
          console.log('File sent:', filename)
        })
      }
    })
  })

  //
  // Any other routes send error.
  //
  app.use(function (req, res, next) {
    res.status(404)
    var payload = {
      'success': false,
      'message': 'URL not found.'
    }
    res.send(payload)
  })

}
