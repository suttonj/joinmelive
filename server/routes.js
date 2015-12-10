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

var discussions = require('./discussions.json'); //mock data if server is down

module.exports = {

  index: function(req, res) {
    res.send({
      tweets: JSON.stringify(trending)
    });
  },

  trends: function(req, res) {
    twitter.get('trends/place', { id: 2367105 }, function(err, data) {
      var trends = JSON.stringify(data);
      if (typeof data === "undefined") {
        res.send({status: false});
      } else {
        res.send(trends);
      }
    });
  },

  // only use for mock data
  discussions: function(req, res) {
    var result = discussions.discussions;
    if (req.query.q) {
      result = result.filter(function(disc) {
        return disc.subject.indexOf(req.query.q) > -1;
      });
    }

    res.send({
      discussions: JSON.stringify(result)
    });
  }

}