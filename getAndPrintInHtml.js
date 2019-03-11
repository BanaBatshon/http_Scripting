var https = require('https');

function getAndPrintHTML (options) {
  var wholeData = '';
  https.get(requestOptions, function (response, options) {
    response.setEncoding('utf8');
    response.on('data', function (chunk) {
      wholeData += chunk;
    });
    response.on('end', function() {
      console.log(wholeData);
  
    });
  });

}

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step3.html'
};

console.log(getAndPrintHTML());
