const dotenv = require('dotenv').config();
const request = require('request');

const getWeather = (lat, lng, callback) => {
    request({
        url: `https://api.darksky.net/forecast/${process.env.DS_API_KEY}/${lat},${lng}`,
        json: true,

    }, (error, response, body) => {
        if (!error && response.statusCode === 200) {
            callback(undefined, {
                temperature: toCelcius(body.currently.temperature),
                apparentTemperature: toCelcius(body.currently.apparentTemperature),
            });
        } else {
            callback('Unable to fetch weather.');
        }
    });
};

const toCelcius = temperature => ((5 / 9) * (temperature - 32)).toFixed(1);

module.exports.getWeather = getWeather;
