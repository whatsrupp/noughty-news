(function(exports){

  function getArticleIdFromUrl (){
    return location.hash.slice(-1);
  }

  function deleteHomePage(){
    var newsContainer=document.getElementById('news-container');
    document.body.removeChild(newsContainer);
  }

  function showSinglePageArticle(){
      deleteHomePage();
      loadArticle();
      addHomeButton();
  }

  function getArticle(){
    var index = getArticleIdFromUrl();
    return articleList.listOfNewsArticles[index];

  }

  function addHomeButton(){

    var hyperLink = document.createElement('a');
    hyperLink.setAttribute('id','home-link');
    hyperLink.setAttribute('href','#home');
    hyperLink.innerHTML = 'Home';

    var stickyHeader = document.getElementById('sticky-header');
    stickyHeader.appendChild(hyperLink);

  }

  function loadArticle(){
    var article = getArticle();
    var headlineText = article.headline;
    var articleBody = article.body;

    var articleWrapper = document.createElement('div');
    articleWrapper.setAttribute('id', 'article-wrapper');

    var headline = document.createElement('h3');
    headline.innerHTML = headlineText;
    var headerDiv = document.createElement('div');
    headerDiv.appendChild(headline);

    var bodyDiv = document.createElement('div');
    bodyDiv.innerHTML = articleBody;

    articleWrapper.appendChild(headerDiv);
    articleWrapper.appendChild(bodyDiv);
    document.body.appendChild(articleWrapper);
  }
  exports.showSinglePageArticle = showSinglePageArticle;
})(this);
