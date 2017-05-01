(function(exports){

  function displayArticles(){
    var listOfArticles = articleList.listOfNewsArticles;
    var numberOfArticles= listOfArticles.length;

    addNewsContainer();

    for (i=0; i<numberOfArticles; i++){
      var article = listOfArticles[i];
      setUpNewsArticleItem(article,i);
    }

  }
  function addNewsContainer(){
    var newsContainer = document.createElement('div');
    newsContainer.setAttribute('class','news-container');
    newsContainer.setAttribute('id','news-container');

    document.body.appendChild(newsContainer);
  }

  function setUpNewsArticleItem(article, index){
    var headlineText = article.headline;
    var summaryText = article.summary;
    var imageURL = article.image;
    var hyperLink = document.createElement('a')
    hyperLink.setAttribute('href', '#article'+ index)
    hyperLink.setAttribute('class', 'article-link')

    var articleDivContainer = document.createElement('div');
    articleDivContainer.setAttribute('class','article-div-container');

    var articleDiv = document.createElement('div');
    articleDiv.setAttribute('class','article-div');

    var imagePort = document.createElement('div');
    imagePort.setAttribute('class','image-port');

    var image = document.createElement('img');
    image.setAttribute('class', 'news-image');
    image.setAttribute('src', imageURL );

    var headline = document.createElement('h3');
    headline.setAttribute('class', 'headline')
    headline.innerHTML = headlineText;

    var summary = document.createElement('p');
    summary.innerHTML = summaryText;
    summary.setAttribute('class','summary')



    var newsContainer = document.getElementById('news-container')
    imagePort.appendChild(image);
    articleDiv.appendChild(imagePort);
    articleDiv.appendChild(headline);
    articleDiv.appendChild(summary);
    hyperLink.appendChild(articleDiv);
    newsContainer.appendChild(hyperLink);
  }
  exports.displayArticles = displayArticles;
})(this)
