function appScript(URL) {
var app_script = document.createElement('script');
app_script.src = URL;
document.body.appendChild(app_script);
};
function appCss(URL) {
var app_css = document.createElement('link');
app_css.href = URL;
app_css.rel = 'stylesheet';
app_css.type = 'text/css';
document.getElementsByTagName('head')[0].appendChild(app_css);
};
