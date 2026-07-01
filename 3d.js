//At a restaurant, you order 1 coffee ($5) and
//1 bagel ($3). Using math and concatenation, create the text:
// 'Total cost: $__'

var str1 = 'Total cost: $'
var num1 = 5;
var num2 = 3;

function totalCost(){
    return str1 + (num1+num2);
}

var totalRes = totalCost();

console.log(totalRes);