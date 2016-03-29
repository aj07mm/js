http = require('http')

var googleapi_key = 'AIzaSyCEGEGwBOV1tg77NaM2e2ByctB6tkeDarw';
var googleapi_url = 'https://www.googleapis.com/geolocation/v1/geolocate?key=' + googleapi_key;

var postData = JSON.stringify({
  'msg' : 'Hello World!'
});

var httpOptions = {
  hostname: googleapi_url,
  port: 80,
  //path: '/upload',
  method: 'POST',
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
    'Content-Length': postData.length
  }
};

// Set up the request
var post_req = http.request(httpOptions, function(res) {
  res.setEncoding('utf8');
  res.on('data', function (chunk) {
      console.log('Response: ' + chunk);
  });
});

// post the data
post_req.write(postData);
post_req.end();