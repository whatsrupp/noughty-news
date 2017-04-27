(function(exports){

  function makeUrlChangeShowNewsArticle(){

    window.addEventListener("hashchange", console.log('hi'),false)
  }

  function getArticleIdFromUrl (){
    return location.hash.split('#')[1];
  }

  exports.makeUrlChangeShowNewsArticle = makeUrlChangeShowNewsArticle
})(this)

makeUrlChangeShowNewsArticle()
