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
  }

}