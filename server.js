var express = require('express'),
  http = require('http'),
  cors = require('cors'),
  twit = require('twit'),
  routes = require('./server/routes'),
  config = require('./server/config'),
  streamHandler = require('./utils/streamHandler');

var app = express();
var port = process.env.PORT || 3030;

app.disable('etag');

app.use(cors());

var twitter = new twit(config.twitter);

app.get('/', routes.index);
app.get('/trends', routes.trends);
app.get('/discussion', routes.discussions);

var server = http.createServer(app).listen(port, function() {
  console.log('Express server listening on port ' + port);
});

var io = require('socket.io').listen(server);

var stream = twitter.stream('statuses/filter',{ track: '#trump'});
streamHandler(stream, io);
