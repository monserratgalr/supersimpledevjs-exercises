//The temperature is 86°F. Calculate the temperature in Celsius//

var fahrenheit = 86;

function toCelsius(){
    return (fahrenheit-32)*5/9;
}

var celsiusResult = toCelsius();

console.log("25°C in °F is: ", celsiusResult);