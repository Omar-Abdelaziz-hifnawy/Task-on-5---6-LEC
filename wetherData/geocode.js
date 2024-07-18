request = require("request");
geocode = (address, callback) => {
  geocodeUrl = `http://api.mapbox.com/geocoding/v5/mapbox.places/${address}.json?access_token=pk.eyJ1IjoiaXNsYW0yODQiLCJhIjoiY2wwamEzNmFhMGFtNTNkb3pqaXk4bXNnYSJ9.qYlrWIqo41gXgNNc4h8yIw`;

  request({ url: geocodeUrl, json: true }, (error, response) => {
    if (error) {
      callback("Unable to connect to weather service!", undefined);
    } else if (response.body.message) {
      callback(`API KEY GEO ERROR: ${response.body.message}`, undefined);
    } else if (response.body.features.length == 0) {
      callback("LOCATION ERROR: unable to find location!", undefined);
    } else {
      callback(undefined, {
        latitude: response.body.features[0].center[0],
        longtitude: response.body.features[0].center[1],
      });
    }
  });
};
module.exports = geocode;
