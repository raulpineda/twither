var express = require('express');
var router = express.Router();

db = new Firebase('https://codherjs.firebaseio.com/');
dbTweets = db.child('tweets');

/* GET home page. */

router.get('/', function(req, res) {
  res.render('index', { tweets: [] });
  // dbTweets.on('child_added', function(snapshot) {
  //   res.render('index', { tweets: snapshot.val()});
  // });
});

module.exports = router;
