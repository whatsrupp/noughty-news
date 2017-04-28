(function(exports) {

  function httpGet(theUrl) {
      var xmlHttp = new XMLHttpRequest();
      xmlHttp.open( "GET", theUrl, false ); // false for synchronous request
      xmlHttp.send( null );
      return xmlHttp.responseText;
  }

  function generateArticleData(url) {
    var data = httpGet(url);
    var allArticleData = JSON.parse(data);
    return allArticleData
  }

  function getArticleData(allArticleData, index) {
    var headline = allArticleData.response.results[index].webTitle;
    var body = allArticleData.response.results[index].fields.body;
    var pageUrl = allArticleData.response.results[index].webUrl;
    return {'headline': headline,'body': body, 'pageUrl': pageUrl};
  }


  function createArticle(allArticleData, index) {
  uniqueArticleData = getArticleData(allArticleData, index);
  article = new Article(uniqueArticleData);
  return article;
}

  exports.generateArticleData = generateArticleData;
  exports.createArticle = createArticle;

})(this);
