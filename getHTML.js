var https = require('https');

function getHTML (options, callback) {

  var wholeData = '';
  https.get(options, function (response) {
    response.setEncoding('utf8');
    response.on('data', function (chunk) {
      wholeData += chunk;
    });
    response.on('end', function() {
      callback(wholeData);
    });
  });

};

function printHTML (html) {
  console.log(html);
}

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step4.html'
};

console.log(getHTML(requestOptions, printHTML));