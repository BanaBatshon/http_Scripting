var getHTML = require('../http-functions');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/reverse.html'
};

function printHTMLReverse (html) {
  htmlArr = (html.split(""));
  console.log(htmlArr.reverse().join(''));

};
console.log(getHTML(requestOptions, printHTMLReverse));