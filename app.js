address = process.argv[2];
geocode = require("./wetherData/geocode");
forecast = require("./wetherData/forecast");
geocode(address, (error, data) => {
  if (error) {
    console.log(`ERROE: ${error}`);
  } else {
    console.log(`DATA: ${JSON.stringify(data)}`);

    forecast(data.latitude, data.longtitude, (error, forecastData) => {
      if (error) {
        console.log(`ERROE: ${error}`);
      } else {
        console.log(`DATA: ${forecastData}`);
      }
    });
  }
});
