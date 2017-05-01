(function(exports) {

  function ArticleList() {
    this.listOfNewsArticles = [];
    this.guardianDataSourcing = new GuardianDataSourcing;

    ArticleList.prototype.storeList = function (url) {
      var allArticleData = this.guardianDataSourcing.generateArticleData(url);
      for (var i = 0; i < 10; i++) {
        this.listOfNewsArticles.push(this.guardianDataSourcing.createArticle(allArticleData, i));
      }
    };

  }
exports.ArticleList = ArticleList;
})(this);

//
var articleList = new ArticleList();
articleList.storeList('http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=http://content.guardianapis.com/technology?show-fields=body');
