var https = require('https');

function getHTML (options, callback) {

    // GET data chunks
https.get(options, function (response) {
    response.setEncoding('utf8');

    var bufferchunk = "";
    response.on('data', function (chunk) {
        bufferchunk += chunk + "\n";
    });
    response.on('end', function () {
        callback(bufferchunk);
    });
  
  })
}
  
  function printHTML (html) {
    console.log(html);
  }
  
  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step4.html'
  };

  getHTML(requestOptions, printHTML);