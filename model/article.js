(function(exports) {

  function Article(articleData) {
    this.headline = articleData.headline;
    this.summary = '';
    this.image = '';
    this.body = articleData.body;
    this.url = articleData.pageUrl;
  }

  Article.prototype.generateImage = function() {
    div = document.createElement('div');
    div.innerHTML = this.body;
    imageurl = div.getElementsByTagName('img')[0].src;
    this.image = imageurl;

  };

  Article.prototype.generateSummary = function(textSummary) {
      this.summary = textSummary.generateSentences(this.url);
  };

  exports.Article = Article;

})(this);
