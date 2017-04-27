function httpGet(theUrl)
{
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", theUrl, false ); // false for synchronous request
    xmlHttp.send( null );
    return xmlHttp.responseText;
}

var data = httpGet("https://content.guardianapis.com/search?section=technology&api-key=73594eff-69a2-47a7-9a1f-154e1ee645d3");
var length = JSON.parse(data).response.results.length;

for (i = 0; i < length; i++) {
  document.write(JSON.parse(data).response.results[i].webTitle);
}
