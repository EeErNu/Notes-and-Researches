var Twit = require('twit');

var T = new Twit({
  consumer_key:         'a1ZHXxBcZsYuwTaSytrUzUvGH',
  consumer_secret:      'EgP5h6J0QhGgFCw1vTOQzNYRmlXTHb1dSzweAP8JCquqAibfO8',
  access_token:         '961682083381989376-yfr9z72h5zXSywvpWAuV9YoesAgJprA',
  access_token_secret:  'oOKsazM6HWA74mo4YR3kbUxMpoeY6M1IkQE2xcYBNm1EL',
  timeout_ms:           60*1000,  // optional HTTP request timeout to apply to all requests.
});

// var stream = T.stream('statuses/filter', { track: ['#Estonia', '#SpaceX', '#habrahabr'], language: 'en' });

var stream = T.stream('statuses/filter', { track: ['#Estonia', '#SpaceX', '#habrahabr']});

stream.on('tweet', function (tweet) {
  console.log(tweet["user"]["name"], tweet["text"]);
  //console.log(tweet["text"]);
});
