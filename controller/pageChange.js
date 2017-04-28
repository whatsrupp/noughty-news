(function(exports){

  function makeUrlChangeShowNewsArticle(){

    window.addEventListener("hashchange",pageChange ,false);
  }

  function getHashFromUrl() {
    return location.hash.split('#')[1];
  }

  function deleteArticlePage() {
    var homeLink = document.getElementById('home-link');
    var stickyHeader = document.getElementById('sticky-header');
    stickyHeader.removeChild(homeLink);
    var articleWrapper = document.getElementById('article-wrapper');
    document.body.removeChild(articleWrapper);
  }

  function pageChange(){
    if(getHashFromUrl() === 'home') {
      deleteArticlePage();
      displayArticles();
    }
    else {showSinglePageArticle();
    }
  }
exports.makeUrlChangeShowNewsArticle = makeUrlChangeShowNewsArticle;
})(this);
