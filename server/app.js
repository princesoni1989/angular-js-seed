/**
 * Main application file
 */

'use strict';

var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var cluster = require('cluster');
var http = require('http');
var clusterCount = 1;
var env;

// Change FRONT-END PORT here
var PORT = 9000;

// Change directory "public" here
var FolderName = '../' + 'client';

/*Command line arguments
 * Command node app.js [PORT] [PUBLIC-DIR-PATH]*/
if (process.argv.length > 1) {
  env = process.argv[2] || 'development'
  PORT = (process.argv[3] && !isNaN(process.argv[3]) && +process.argv[3] ) || PORT;
  FolderName = process.argv[4] || FolderName;
}

/**
 * Cluster setting
 */
if (cluster.isMaster) {
  var numReqs = 0;

  // Start workers and listen for messages containing notifyRequest
  var numCPUs = require('os').cpus().length;
  for (var i = 0; i < numCPUs; i++) {
    cluster.fork();
  }

  Object.keys(cluster.workers).forEach(function (id) {
    cluster.workers[id].on('message', function messageHandler(msg) {
      if (msg.cmd && msg.cmd == 'notifyRequest') {
        numReqs += 1;
      }
    });
  });

} else {
  // Worker processes have a http server.
  // Setup server
  var app = express();
  var server = require('http').createServer(app);

  //app.use(favicon(path.join(__dirname, FolderName, 'favicon.ico')));
  if (env === 'development') {
    app.use(require('connect-livereload')());
  }
  app.use(favicon(path.join(__dirname, FolderName, 'favicon.ico')));
  app.use(express.static(path.join(__dirname, '../.tmp')));
  app.use(express.static(path.join(__dirname, FolderName)));
  app.set('appPath', path.join(__dirname, FolderName));

  // Insert routes below
  // All undefined asset or api routes should return a 404
  app.route('/:url(api|components|app|bower_components|assets)/*')
    .get(function (req, res) {
      res.send("Error 404");
    });

  // All other routes should redirect to the index.html
  app.route('/*')
    .get(function (req, res) {
      res.sendFile(app.get('appPath') + '/index.html');
    });

  // Start server
  server.listen(PORT, function () {
    console.log('Server Listening To PORT: %d ', PORT);
    clusterCount = clusterCount + 1;
  });
}

module.exports = app;
