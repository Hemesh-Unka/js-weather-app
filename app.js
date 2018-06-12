// const yargs = require('yargs');

// const geocode = require('./geocode/geocode.js');

// const argv = yargs
//     .options({
//         a: {
//             demand: true,
//             alias: 'address',
//             describle: 'Address to fetch weather for',
//             string: true,
//         },
//     })
//     .help()
//     .alias('help', 'h')
//     .argv;

// geocode.geocodeAddress(argv.address, (errorMessage, results) => {
//     if (errorMessage) {
//         console.log(errorMessage);
//     } else {
//         console.log(JSON.stringify(results, undefined, 2));
//     }
// });

// b7f0e3d420ac74516726f236afd9f547

const request = require('request');

request({
    url: 'https://api.darksky.net/forecast/b7f0e3d420ac74516726f236afd9f547/-37.7668467,175.1898931',
    json: true,

}, (error, response, body) => {
    if (!error && response.statusCode === 200) {
        console.log(body.currently.temperature);
    } else {
        console.log('Unable to fetch weather.');
    }
});
