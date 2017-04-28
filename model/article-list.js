(function(exports) {

  function ArticleList() {
    this.listOfNewsArticles = [];

    ArticleList.prototype.storeList = function (url) {
      var allArticleData = generateArticleData(url);
      for (var i = 0; i < 10; i++) {
        this.listOfNewsArticles.push(createArticle(allArticleData, i));
      }
    };

  }
exports.ArticleList = ArticleList;
})(this);


// var articleList = new ArticleList();
// articleList.storeList('http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=http://content.guardianapis.com/technology?show-fields=body');
