function textNodesUnder(el){
  var n, a=[], walk=document.createTreeWalker(el,NodeFilter.SHOW_TEXT,null,false);
  while(n=walk.nextNode()) a.push(n);
  return a;
}

function concatenateTextNodes(textNodeArray){
  var finalString = ''
  for (i=0; i <textNodeArray.length; i++){
    finalString += textNodeArray[i].nodeValue
  }
  return finalString
}

function checkStringForText(mainString, soughtString){
  var test = new RegExp(soughtString)
  return test.test(mainString);
}

function checkURL() {
  return window.location.protocol + "//" + window.location.host + "/" + window.location.pathname;
}

function featureTest(test) {
  var success = true;
  try {
    test();
    document.write(testAction);
    document.write("<br>");
  }
  catch(error) {
    success = false;
    document.write(testAction);
    document.write("<br>");
    document.write(error);
    document.write("<br><br>")
  }
  if (success) {
    document.write('no error');
    document.write('<br><br>')
  }
}
