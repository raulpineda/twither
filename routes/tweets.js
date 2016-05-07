var express = require('express');
var router = express.Router();

db = new Firebase('https://codherjs.firebaseio.com/');
dbTweets = db.child('tweets');

router.get('/', function(req, res) {
  var tweets;
  dbTweets.on('value', function(snapshot) {
    tweets = snapshot.val();
  }, function(error) {
    console.log("The read failed: " + error.code);
  });
  res.send(JSON.stringify(tweets));
});

router.post('/', function(req, res) {
  if(req.body.content && req.body.author) {
    dbTweets.push({
      timestamp: Date.now(),
      author: req.body.author,
      content: req.body.content
    });
    res.send(JSON.stringify({success: true}));
  } else {
    res.status(400).send('Author and content are required');
  }
});

module.exports = router;
