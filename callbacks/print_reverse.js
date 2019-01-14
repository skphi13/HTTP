var https = require('https');
var getHTML = require('./http-functions');

function printHTMLReverse(html) {
    console.log(html.split(' ').reverse().join(''));
}

var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step6/reverse.html'
};

getHTML(requestOptions, printHTMLReverse);