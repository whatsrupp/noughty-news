function createListOfNewsItems(){
  var testAction = "Verify that the API call creates a list of news Items";
  // below two functions dependent on the functions being written:
  APICall();
  var list = createList();
  assert.isEqual(list.tagName, 'ul')
  // below depends on how long we want the list to be
  assert.isEqual(list.length, 10)
}

function apiCallReturnsHash() {
  var testAction = "Verify that an object is returned by the API call";
  news = APICall();
  assert.isOfType(news, "object")
}

function displayNewsItem() {
  var testAction = "Verify that the correct paragraph is returned when clicking on list item"
  APICall();
  createList();
  singleItemView(itemInQuestion);
  assert.isEqual(itemInQuestion, '<p>xxxxxx</p>')
}

function createLinks() {
  var testAction = 'Verify that a link is created for each list item'
  APICall();
  list = createList();
  firstItem = list[0]
  assert.isEqual(firstItem, "< a href='xxx'>")
}
