var https = require('https');

function getAndPrintHTML () {

  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step1.html'
};
// GET data chunks
https.get(requestOptions, function (response) {
    response.setEncoding('utf8');

    var bufferchunk = "";
    response.on('data', function (chunk) {
        bufferchunk += chunk + "\n";
    });
    response.on('end', function () {
        console.log(bufferchunk);
    });
});
}
getAndPrintHTML();
  
  