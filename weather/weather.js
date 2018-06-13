const request = require('request');
// b7f0e3d420ac74516726f236afd9f547

const getWeather = (lat, lng, callback) => {
    request({
        url: `https://api.darksky.net/forecast/b7f0e3d420ac74516726f236afd9f547/${lat},${lng}`,
        json: true,

    }, (error, response, body) => {
        if (!error && response.statusCode === 200) {
            callback(undefined, {
                temperature: body.currently.temperature,
                apparentTemperature: body.currently.apparentTemperature,
            });
        } else {
            callback('Unable to fetch weather.');
        }
    });
};

module.exports.getWeather = getWeather;
