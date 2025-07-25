const convertToCelsius = function(celsiusTemp) {
  let fahrenheitTemp = (celsiusTemp-32)*5/9;
    fahrenheitTemp = Math.round(fahrenheitTemp*10)/10;
    return fahrenheitTemp;
};

const convertToFahrenheit = function(fahrenheitTemp) {
  let celsiusTemp = fahrenheitTemp*9/5+32;
  celsiusTemp = Math.round(celsiusTemp*10)/10;
  return celsiusTemp;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
