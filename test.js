var https = require('https')
var getHTML = require('./http-functions');
console.log(getHTML);


function printHTML (html) {
    console.log(html);
  }
  
var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step5.html'
};

getHTML(requestOptions, printHTML);