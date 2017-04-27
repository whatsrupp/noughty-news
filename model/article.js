(function(exports) {

  function Article(articleData) {
    this.headline = articleData.headline;
    this.summary = '';
    this.image = '';
    this.body = articleData.body;
    this.url = articleData.pageUrl;
  }
  exports.Article = Article;
})(this);
