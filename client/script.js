
function loadXMLDoc() {
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange = function() {
    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
      myFunction(xmlhttp);
    }
  };
  xmlhttp.open("GET", "http://thecatapi.com/api/images/get?format=xml&results_per_page=20", true);
  xmlhttp.send();
}
function myFunction(xml) {
  var i;
  var xmlDoc = xml.responseXML;
  var div="";
  var x = xmlDoc.getElementsByTagName("url");
  for (i = 0; i <x.length; i++) {
    div += '<img src="'
           + x[i].childNodes[0].nodeValue
           +'"><img>';
  }
  document.getElementById("demo").innerHTML = div;
}