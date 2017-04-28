var articleData = {'pageUrl': dataString().response.results[0].webUrl, 'headline': dataString().response.results[0].headline, 'body': dataString().response.results[0].fields.body};

function TextSummaryDouble() {
  TextSummaryDouble.prototype.generateSentences = function() {
    return "Feeling lucky. Feeling ducky.";
  };
};

function generateImageTest() {
  testAction = "If image available, Article this.image is updated with url";
  article = new Article(articleData);
  article.generateImage();
  assert.containsText(article.image, "https://media.guim.co.uk/5a074505dd963aa76329dfcd5916a0225f1bb9cc/0_0_1631_979/1000.jpg")
}

function textSummaryCall() {
  testAction = "tests that summary generator is called (through stub)";
  var textSummaryDouble = new TextSummaryDouble;
  article = new Article(articleData);
  article.generateSummary(textSummaryDouble);
  assert.containsText("Feeling lucky. Feeling ducky.", article.summary)
}


//
// function createListOfNewsItems(){
//   var testAction = "Verify that the API call creates a list of news Items";
//   // below two functions dependent on the functions being written:
//   APICall();
//   var list = createList();
//   assert.isEqual(list.tagName, 'ul')
//   // below depends on how long we want the list to be
//   assert.isEqual(list.length, 10)
// }
//
// function apiCallReturnsHash() {
//   var testAction = "Verify that an object is returned by the API call";
//   news = APICall();
//   assert.isOfType(news, "object")
// }
//
// function displayNewsItem() {
//   var testAction = "Verify that the correct paragraph is returned when clicking on list item"
//   APICall();
//   createList();
//   singleItemView(itemInQuestion);
//   assert.isEqual(itemInQuestion, '<p>xxxxxx</p>')
// }
//
// function createLinks() {
//   var testAction = 'Verify that a link is created for each list item'
//   APICall();
//   list = createList();
//   firstItem = list[0]
//   assert.isEqual(firstItem, "< a href='xxx'>")
// }
