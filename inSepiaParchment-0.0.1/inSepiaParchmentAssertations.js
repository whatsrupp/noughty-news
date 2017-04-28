function pageHasContent(text){
  bodyTextNodes = textNodesUnder(document.body);
  bodyTextContent = concatenateTextNodes(bodyTextNodes);
  result = checkStringForText(bodyTextContent, text);
  if (result == false) {
    throw new Error("Page does not contain '" + text + "'");
  }
}
function pageDoesNotHasContent(text){
  bodyTextNodes = textNodesUnder(document.body);
  bodyTextContent = concatenateTextNodes(bodyTextNodes);
  result = checkStringForText(bodyTextContent, text);
  if (result == true) {
    throw new Error("Page contains '" + text + "'");
  }
}

function pageHasURL(expectedURL){
  if (expectedURL !== checkURL()) {
    throw new Error("Current URL is: " + checkURL + ". Expected: " + expectedURL);
  }
}
