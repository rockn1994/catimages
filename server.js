var nr = require('newrelic');
var express = require('express');
var app = express();
var request = require('request');
var path = require('path');
require('newrelic');

app.use(express.static(path.join(__dirname, 'client')));


var server = app.listen(8081, function () {

  var host = server.address().address
  var port = server.address().port

  console.log("Example app listening at http://%s:%s", host, port)

})