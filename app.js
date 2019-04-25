const request = require("request"); //HTTP client module
const geocode = require("./utils/geocode");
const forecast = require("./utils/forecast");

// const darkskyURL =
//   "https://api.darksky.net/forecast/7c8ad70fb67957a77247dafa42433940/37.8267,-122.4233?units=us";

// const geocodeURL =
//   "https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoibWFyY29zNWlsdmEiLCJhIjoiY2p1dHhmNTd0MDd1NjQ0bXhzZjA2ZGk2byJ9.3PTKgqTxP9C1vDTxKmT79w&limit=1";

// request({ url: darkskyURL, json: true }, (error, response) => {
//   //const data = JSON.parse(response.body); // Parsing JSON - Turn the file string into a JSON object
//   //console.log(response.body.currently);

//   if (error) {
//     console.log("Unable to connect to weather service!");
//   } else if (response.body.error) {
//     console.log("Unable to find location");
//   } else {
//     const currentInfo = response.body.currently;
//     console.log(
//       response.body.daily.data[0].summary +
//         " It's currently " +
//         currentInfo.temperature +
//         " degrees out. There is a " +
//         currentInfo.precipProbability +
//         "% chance of rain"
//     );
//   }
// });

geocode("Salt Lake City", (error, data) => {
  console.log("Error", error);
  console.log("Data", data);
});

forecast(-111.8904, 40.767, (error, data) => {
  console.log("Error", error);
  console.log("Data", data);
});
