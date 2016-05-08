var express = require('express');
var router = express.Router();

db = new Firebase('https://codherjs.firebaseio.com/');
dbTweets = db.child('tweets');

router.get('/', function(req, res) {
  var tweets;
  dbTweets.orderByChild('timestamp').on('value', function(snapshot) {
    tweets = snapshot.val();
  }, function(error) {
    console.log("The read failed: " + error.code);
  });
  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify(tweets));
});

router.post('/', function(req, res) {
  if(req.body.content && req.body.author) {
    dbTweets.push({
      timestamp: Date.now(),
      author: req.body.author,
      content: req.body.content
    });
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify({success: true}));
  } else {
    res.setHeader('Content-Type', 'application/json');
    res.status(400).send({error: 'Author and content are required'});
  }
});

router.get('/:id', function(req, res) {
  if(req.params.id) {
    res.setHeader('Content-Type', 'application/json');
    var db = new Firebase('https://codherjs.firebaseio.com/tweets/' + req.params.id);
    var tweet;
    db.on('value', function(snapshot) {
      tweet = snapshot.val();
      res.send(JSON.stringify(tweet));
    }, function(error) {
      res.status(404).send(JSON.stringify(({error: 'Tweet not found'})))
    });
  }
})

module.exports = router;
