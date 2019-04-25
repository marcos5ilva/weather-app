const request = require("request");

const forecast = (long, lat, callback) => {
  const url =
    "https://api.darksky.net/forecast/7c8ad70fb67957a77247dafa42433940/" +
    lat +
    "," +
    long;

  request({ url: url, json: true }, (error, response) => {
    if (error) {
      callback("Unable to connect to weather service!", undefined);
    } else if (response.body.error) {
      callback("Unable to find location. Try another search.", undefined);
    } else {
      callback(undefined, {
        summary: response.body.daily.data[0].summary,
        temperature: response.body.currently.temperature,
        preciptation: response.body.currently.precipProbability
      });
    }
  });
};

module.exports = forecast;
