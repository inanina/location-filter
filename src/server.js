var express = require('express')
var proxy = require('http-proxy-middleware')
 
var app = express()
 
app.use('/', proxy({ target: 'http://transport.opendata.ch/', changeOrigin: true }))
app.listen(4000)