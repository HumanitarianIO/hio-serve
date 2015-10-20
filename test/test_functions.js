//
// Tests configuration files.
//
var fs = require('fs')
var path = require('path')
var should = require('should')
var expect = require('chai').expect

//
// Functions.
//
var Fetch = require('../app/functions/fetch')

describe('Application functions.', function () {
  it('Fetch._name() should return correct file name.', function (done) {
    var data = 'GAUL_2014_2.zip'
    Fetch._name(year = 2014, admin = 2, function (err, result) {
      if (data) {
        expect(result).to.equal(data)
        done()
      }
    })
  })

  it('Fetch.FetchGaulFile() should return a complete file path.', function (done) {
    var data = path.resolve('static', 'gaul', 'GAUL_2014_2.zip')
    Fetch.FetchGaulFile(year = 2014, admin = 2, function (err, result) {
      if (data) {
        expect(result).to.equal(data)
        done()
      }
    })
  })

})
