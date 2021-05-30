/** smart.js ver 1.00  
**/
function NewScript(URL) {
var app_script = document.createElement('script');
app_script.src = URL;
document.body.appendChild(app_script);
};
function NewCss(URL) {
var app_css = document.createElement('link');
app_css.href = URL;
app_css.rel = 'stylesheet';
app_css.type = 'text/css';
document.getElementsByTagName('head')[0].appendChild(app_css);
};
function getParam(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
};
var queryString = window.location.search;
var queryObject = new Object();
if(queryString){
  queryString = queryString.substring(1);
  var parameters = queryString.split('&');

  for (var i = 0; i < parameters.length; i++) {
    var element = parameters[i].split('=');

    var paramName = decodeURIComponent(element[0]);
    var paramValue = decodeURIComponent(element[1]);

    queryObject[paramName] = paramValue;
  }
};
