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
    try {
      imageurl = div.getElementsByTagName('img')[0].src;
    }
    catch(error) {
      imageurl = 'resources/images/faviconImage.png'
    }
    this.image = imageurl;

  };

  Article.prototype.generateSummary = function() {
      this.summary = generateSentences(this.url);
  };

  exports.Article = Article;

})(this);
