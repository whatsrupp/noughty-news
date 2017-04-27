// testing Aylien API


// App name    Makers Academy's App
// App ID    d78e0c77
// Key    2b3c78c9b8ad4a92a2b009f4686fa22c
// Endpoint    https://api.aylien.com/api/v1

(function(exports) {


var AYLIENTextAPI = require('aylien_textapi'),
  _ = require('underscore'),
  request = require('request'),
  parseString = require('xml2js').parseString;

  var textapi = new AYLIENTextAPI({
    application_id: 'd78e0c77',
    application_key: '2b3c78c9b8ad4a92a2b009f4686fa22c'
  });

// request('http://feeds.bbci.co.uk/news/rss.xml', function (error, response, body) {
//   if (!error && response.statusCode == 200) {
//     parseString(body, function(error, feed) {
//       var story = _.sample(feed.rss['channel'][0].item).description[0] || undefined;
//       if (story) {
//         textapi.entities(story, function(error, entities) {
//           var keyword = entities.entities.keyword[0];
//           textapi.related(keyword, function(error, related) {
//             var random_phrase = _.sample(related.related.slice(0,5));
//             console.log("Results:\n");
//             console.log("- Story: " + story);
//             console.log("- Selected keyword: " + keyword);
//             console.log("- Related phrases: " + _(related.related.slice(0,5)).pluck('phrase').join(', '));
//             console.log("- New Story: " + story.replace(new RegExp(keyword,"g"), '*'+random_phrase.phrase+'*'));
//           });
//         });
//       }
//     });
//   }
// });
textapi.summarize({
  url: 'http://techcrunch.com/2015/04/06/john-oliver-just-changed-the-surveillance-reform-debate',
  sentences_number: 3
}, function(error, response) {
  if (error === null) {
    response.sentences.forEach(function(s) {
      console.log(s);
    });
  }
});

})(this);
