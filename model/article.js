(function(exports) {

  function Article(articleData) {
    this.headline = articleData.headline;
    this.summary = '';
    this.image = '';
    this.body = articleData.body;
    this.url = articleData.pageUrl;
  }

  Article.prototype.image = function() {
    div = document.createElement('div');
    div.innerHTML = this.body;
    imageurl = div.getElementsByTagName('img')[0].src;
    this.image = imageurl;
  };

  exports.Article = Article;
})(this);
