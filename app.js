const request = require('request');
const yargs = require('yargs');

const argv = yargs
  .options({
    a: {
      demand: true,
      alias: 'address',
      describle: 'Address to fetch weather for',
      string: true,
    },
  })
  .help()
  .alias('help', 'h')
  .argv;

request({
  url: `https://maps.googleapis.com/maps/api/geocode/json?address=${argv.address}&key=AIzaSyBW9Z7I3woiO4vwmm0DQjlnLEMhqgCwJnU`,
  json: true,
}, (error, response, body) => {
  console.log(`Address: ${body.results[0].formatted_address}`);
  console.log(`Latitude: ${body.results[0].geometry.location.lat}`);
  console.log(`Longitude: ${body.results[0].geometry.location.lng}`);
});
