function generateListOfHeadlines() {
  var testAction = "Verify that a list of headlines is generated";
  clickButton('Generate');
  pageHasContent('xxxx');
}

function clickLink() {
  var testAction = "Verify that a list of headlines is generated";
  clickButton('Generate');
  clickLink('yyy');
  pageHasContent('xxxx');
}
