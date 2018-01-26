let expect = require('chai').expect;
const Celcius = require("../src/celcius.js");
let Fahrenheit = require("../src/fahrenheit.js");

describe('celciusToFahrenheit()', function () {
  it('should convert celcius to fahrenheit', function () {
    let input = 20;
    let result = Fahrenheit.celciusToFahrenheit(input);
    expect('68.00 °F').to.be.equal(result);
  });
});

describe('convertFromFahrenheitToKelvin()', function () {
  it('should convert fahrenheit to kelvin', function () {
    let input = 32;
    let result = Fahrenheit.fahrenheitToKelvin(input);
    expect('273.15 K').to.be.equal(result);
  });
});

describe('convertFromFahrenheitToCelcius()', function () {
  it('should convert fahrenheit to celcius', function () {
    let input = 32;
    let result = Celcius.fahrenheitToCelcius(input);
    expect('0.00 °C').to.be.equal(result);
  });
});

describe('convertFromCelciusToKelvin()', function () {
  it('should convert celcius to kelvin', function () {
    let input = 32;
    let result = Celcius.celciusToKelvin(input);
    expect('305.15 K').to.be.equal(result);
  });
});