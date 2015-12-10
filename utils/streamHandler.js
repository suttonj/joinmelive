module.exports = function(stream, io){

  stream.on('tweet', function(data) {
    var tweet = {
      twid: data['id'],
      active: false,
      author: data['user']['name'],
      avatar: data['user']['profile_image_url'],
      body: data['text'].replace(/(RT.*:\s)/g,""),
      date: data['created_at'],
      screenname: data['user']['screen_name']
    };

    io.emit('tweet', tweet);
  });

};