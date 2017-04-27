(function(exports) {

  function httpGet(theUrl) {
      var xmlHttp = new XMLHttpRequest();
      xmlHttp.open( "GET", theUrl, false ); // false for synchronous request
      xmlHttp.send( null );
      return xmlHttp.responseText;
  }

  function getArticleData(index, json) {
    var headline = json.response.results[index].webTitle;
    var body = json.response.results[index].fields.body;
    var pageUrl = json.response.results[index].webUrl;
    return {'headline': headline,'body': body, 'pageUrl': pageUrl};
  }

  var articleList = [];

  function createArticleList(url) {
  var data = httpGet(url);
  var json = JSON.parse(data);
  var listLength = json.response.results.length;
  for (var j = 0; j < 9; i++);{
    articleData = getArticleData(j, json);
    article = new Article(articleData);
    articleList.push(article);
  }
}
  exports.articleList = articleList;
  exports.createArticleList = createArticleList;
})(this);
