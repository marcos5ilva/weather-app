const request = require("request"); //HTTP client module

const url =
  "https://api.darksky.net/forecast/7c8ad70fb67957a77247dafa42433940/37.8267,-122.4233?units=us";

request({ url: url, json: true }, (error, response) => {
  //const data = JSON.parse(response.body); // Parsing JSON - Turn the file string into a JSON object
  //console.log(response.body.currently);

  const currentInfo = response.body.currently;
  console.log(
    response.body.daily.data[0].summary +
      " It's currently " +
      currentInfo.temperature +
      " degrees out. There is a " +
      currentInfo.precipProbability +
      "% chance of rain"
  );
});
