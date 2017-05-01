(function(exports) {

  function GuardianDataSourcing() {


    this.textSummary = new TextSummary();

    GuardianDataSourcing.prototype.httpGet= function(theUrl) {
        var xmlHttp = new XMLHttpRequest();
        xmlHttp.open( "GET", theUrl, false ); // false for synchronous request
        xmlHttp.send( null );
        return xmlHttp.responseText;
    };


    GuardianDataSourcing.prototype.generateArticleData = function(url) {
      var data = this.httpGet(url);
      var allArticleData = JSON.parse(data);
      return allArticleData;
    };

    GuardianDataSourcing.prototype.getArticleData = function(allArticleData, index) {
      var headline = allArticleData.response.results[index].webTitle;
      var body = allArticleData.response.results[index].fields.body;
      var pageUrl = allArticleData.response.results[index].webUrl;
      return {'headline': headline,'body': body, 'pageUrl': pageUrl};
    };


    GuardianDataSourcing.prototype.createArticle = function(allArticleData, index) {
    uniqueArticleData = this.getArticleData(allArticleData, index);
    article = new Article(uniqueArticleData);
    article.generateSummary(this.textSummary);
    article.generateImage();

    return article;
    };
  }

  exports.GuardianDataSourcing = GuardianDataSourcing;

})(this);
