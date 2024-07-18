request = require("request");

forecast = (latitude, longtitude, callback) => {
  wetherApiUrl = `http://api.weatherapi.com/v1/current.json?key=dfc81ece8ea24d8ba7a181549231607&q=${latitude},${longtitude}`;
  request({ url: wetherApiUrl, json: true }, (error, response) => {
    if (error) {
      callback("Unable to connect to weather service!", undefined);
    } else if (response.body.error) {
      callback(`API KEY FORECAST ERROR: ${response.body.error}`, undefined);
    } else {
      callback(
        undefined,
        `${response.body.location.name}: ${response.body.current.condition.text} ${response.body.current.temp_c} °C`
      );
    }
  });
};

module.exports = forecast;
