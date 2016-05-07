var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
  console.log(req);
  var tweets = [
    { id: 1, content: 'hola, twitter'},
    { id: 2, content: 'I mean, twither'}
  ];
  res.send(JSON.stringify(tweets));
});

module.exports = router;
