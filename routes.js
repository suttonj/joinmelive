var Twit = require('twit'),
  config = require('./config'),
  https = require('https'),
  twitter = new Twit(config.twitter);

var trending = [
  {
     twid: 123,
     body: '#potus',
  },
  {
     twid: 124,
     body: '#trump',
  },
  {
     twid: 125,
     body: '#hackathon',
  }
];

module.exports = {

  index: function(req, res) {
    res.send({
      tweets: JSON.stringify(trending)
    });
  },

  trends: function(req, res) {
    twitter.get('trends/place', { id: 1 }, function(err, data) {
      var trends = JSON.stringify(data);
      if (typeof data === "undefined") {
        res.send({status: false});
      } else {
        res.send({trends: trends, status: true});
      }
    });
  }

}