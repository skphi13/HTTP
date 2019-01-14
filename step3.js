var https = require('https');

function getAndPrintHTML (options) {

    // GET data chunks
https.get(options, function (response) {
    response.setEncoding('utf8');

    var bufferchunk = "";
    response.on('data', function (chunk) {
        bufferchunk += chunk + "\n";
    });
    response.on('end', function () {
        console.log(bufferchunk);
    });
  
  })
}
  
  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step3.html'
  };

  getAndPrintHTML (requestOptions);