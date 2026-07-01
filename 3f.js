//Display the text from 3e in a popup using alert//

var str1 = 'Total cost: $'
var num1 = 5;
var num2 = 3;

function totalCost(){
    return str1 + (num1+num2);
}

var totalRes = totalCost();

alert(totalRes);
console.log(totalRes);