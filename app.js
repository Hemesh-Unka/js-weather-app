const request = require('request')

request({
  url: 'https://maps.googleapis.com/maps/api/geocode/json?address=%223-4%20holborn%20circus%20London%22&key=AIzaSyBW9Z7I3woiO4vwmm0DQjlnLEMhqgCwJnU',
  json: true
}, (error, response, body) => {
  console.log(`Address: ${body.results[0].formatted_address}`);
  console.log(`Latitude: ${body.results[0].geometry.location.lat}`);
  console.log(`Longitude: ${body.results[0].geometry.location.lng}`);
});
