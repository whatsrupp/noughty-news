(function(exports) {

  function ArticleList() {
    this.list = [];

  ArticleList.prototype.storeList = function (url) {
      for (var i = 0; i < 10; i++) {
        this.list.push(createArticle(url, i));
      }
  };

  }
exports.ArticleList = ArticleList;
})(this);


var articleList = new ArticleList();
articleList.storeList('http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=http://content.guardianapis.com/technology?show-fields=body');
