//
// Connects to database and runs server.
//
var fs = require('fs')
var cors = require('cors')
var moment = require('moment')
var bodyParser = require('body-parser')
var express = require('express')
var app = express()

var morgan = require('morgan')

var config = JSON.parse(fs.readFileSync('package.json', 'utf8'))

var port = process.env.PORT || 9000
var __version__ = 'v.0.1.0'

//
// Routes.
//
require('./app/routes.js')(app, config)

//
// Start server.
//
app.listen(port)
console.log('Scraper Status API running on port ' + port)
