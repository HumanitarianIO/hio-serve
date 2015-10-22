//
// Connects to database and runs server.
//
var fs = require('fs')
var express = require('express')
var app = express()

//
// Configuration variables.
//
var config = JSON.parse(fs.readFileSync('package.json', 'utf8'))
var port = process.env.PORT || 9000

//
// Routes.
//
require('./app/routes.js')(app, config)

//
// Serving static files.
//
app.use(express.static('static'))

//
// Start server.
//
app.listen(port)
console.log('Scraper Status API running on port ' + port)
