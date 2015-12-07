var express = require('express'),
  http = require('http'),
  cors = require('cors'),
  twitter = require('twitter'),
  routes = require('./routes'),
  config = require('./config'),
  streamHandler = require('./utils/streamHandler');

var app = express();
var port = process.env.PORT || 3030;

app.disable('etag');

app.use(cors());

var twit = new twitter(config.twitter);

app.get('/', routes.index);

var server = http.createServer(app).listen(port, function() {
  console.log('Express server listening on port ' + port);
});

var io = require('socket.io').listen(server);

twit.stream('statuses/filter',{ track: '#potus'}, function(stream){
  streamHandler(stream,io);
});