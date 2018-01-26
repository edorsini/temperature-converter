convertFromCelciusToFahrenheit = function(input) {
  let result = input * (9/5) + 32;
  return `${result.toFixed(2)} °F`;
};
      
convertFromFahrenheitToKelvin = function(input) {
  let result = (input + 459.67) * (5/9);
  return `${result.toFixed(2)} K`;
};
    
module.exports = {
  celciusToFahrenheit: convertFromCelciusToFahrenheit,
  fahrenheitToKelvin: convertFromFahrenheitToKelvin
}