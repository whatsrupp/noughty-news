

// testing Aylien API

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
