var https = require('https');

function getAndPrintHTML () {

  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step2.html'
  };

var wholeData = '';
https.get(requestOptions, function (response) {
  response.setEncoding('utf8');
  response.on('data', function (chunk) {
    wholeData += chunk;
  });
  response.on('end', function() {
    console.log(wholeData);

  });
});
};

console.log(getAndPrintHTML());