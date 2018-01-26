convertFromFahrenheitToCelcius = function(input) {
  let result = (input - 32) / (9/5);
  return `${result.toFixed(2)} °C`;
};
      
convertFromCelciusToKelvin = function(input) {
  let result = input + 273.15;
  return `${result.toFixed(2)} K`;
};
    
module.exports = {
  fahrenheitToCelcius: convertFromFahrenheitToCelcius,
  celciusToKelvin: convertFromCelciusToKelvin
}