# twither
Superduper basic twitter clone for a workshop

# Twither API
## Getting Tweets
GET https://twither.herokuapp.com/tweets

Returns a list of tweets
```
{
  KHCQTDwKkWtws4d2JIU: {
    author: 'Sherlock Holmes',
    content: 'When you have eliminated all which is impossible, then whatever remains, however improbable, must be the truth',
    timestamp: '1462654666823'
  },
  KHCRRE3KHSvmtSaaT79: {
    author: 'John Watson',
    content: 'Which is it today,’ I asked, ‘morphine or cocaine?',
    timestamp: '1462654996720'
  }
}
```

## Getting a Tweet
GET https://twither.herokuapp.com/tweets/:id

Returns a tweet if found
```
{
  author: 'Sherlock Holmes',
  content: 'When you have eliminated all which is impossible, then whatever remains, however improbable, must be the truth',
  timestamp: '1462654666823'
}
```
-----------------------
## Publishing Tweets
POST https://twither.herokuapp.com/tweets

POST Body
```
{
  author: String,
  content: String
}
```
Publishes a new tweet, if successful returns `{success: true}`

Otherwise, returns `{error: 'message'}` with code 400
