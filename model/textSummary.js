// testing Aylien API


(function(exports) {

  function aylienURL(theUrl) {
      var defaultURL = "http://news-summary-api.herokuapp.com/aylien?apiRequestUrl=https://api.aylien.com/api/v1/summarize?url=";
      var sentences_number = 1
      var xmlHttp = new XMLHttpRequest();
      xmlHttp.open( "GET", defaultURL + theUrl, false ); // false for synchronous request
      xmlHttp.send( null );
      return xmlHttp.responseText;
  }

function generateSentences(aUrl) {
  var data = aylienURL(aUrl);
  var json = JSON.parse(data);
  var sentences = json.sentences[0] + " " + json.sentences[1];
  return sentences;
}



exports.aylienURL = aylienURL;
exports.generateSentences = generateSentences;

})(this);

// document.write(aylienURL("http://nypost.com/2017/04/24/elon-musk-thinks-tiny-computers-in-our-brains-will-save-us-from-ai/"));

// http://news-summary-api.herokuapp.com/aylien?apiRequestUrl=https://api.aylien.com/api/v1/summarize?url=http://nypost.com/2017/04/24/elon-musk-thinks-tiny-computers-in-our-brains-will-save-us-from-ai/&sentences_number=3
