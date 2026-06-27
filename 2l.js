//The temperature is 25°C. Calculate the temperature in Fahrenheit//

var celsius = 25;

function toFahrenheit(){
    return (celsius*9/5)+32;
}

var fahResult = toFahrenheit();

console.log("25°C in °F is: ", fahResult);