// ==UserScript==
// @name     EdPuzzle Clap
// @version  1
// @grant    GM.xmlHttpRequest
// @include  https://edpuzzle.com/*
// @run-at   document-start
// ==/UserScript==

window.addEventListener('beforescriptexecute', function(e) {
    src = e.target.src;
    if (src.startsWith("https://assets.edpuzzle.com/app/app")) {
        console.log("replacing!" + src)
        e.preventDefault();
        e.stopPropagation();        
        GM.xmlHttpRequest({
            method: "GET",
            url: e.target.src,
            onload: function(response) {
                addScript(response.responseText);
            }
        });
    }
});

function addScript(text) {
  	text = text.replace(/(\w+\.)+allowSkipAhead/g, "true");
    var newScript = document.createElement('script');
    newScript.type = "text/javascript";
    newScript.textContent = text;
    var body = document.getElementsByTagName('body')[0];
    body.appendChild(newScript);
}
