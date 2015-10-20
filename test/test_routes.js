//
// Tests configuration files.
//
var fs = require('fs')
var path = require('path')
var should = require('should')

var chai = require('chai')
var expect = require('chai').expect

var http = require('http')
var chaiHttp = require('chai-http')

//
// Configuring Chai to use http.
//
chai.use(chaiHttp)

describe('Application routes.', function () {
  var application = chai.request('http://localhost:9000')

  it('GET [/status] should return 200 status.', function (done) {
    application
      .get('/status')
      .end(function (err, res) {
        expect(res.status).to.equal(200)
        done()
      })
  })

  it('GET [/gaul/2014] should return { Content-type: application/zip }.', function (done) {
    application
      .get('/gaul')
      .end(function (err, res) {
        expect(res.header['content-type']).to.equal('application/zip')
        done()
      })
  })

  it('GET [/gaul/2014/1] should return { Content-type: application/zip }.', function (done) {
    application
      .get('/gaul/2014/1')
      .end(function (err, res) {
        expect(res.header['content-type']).to.equal('application/zip')
        done()
      })
  })

  it('GET [/gaul/2014/2] should return { Content-type: application/zip }.', function (done) {
    application
      .get('/gaul/2014/2')
      .end(function (err, res) {
        expect(res.header['content-type']).to.equal('application/zip')
        done()
      })
  })

})
