//You order 1 coffee ($5.99) and 1 bagel ($2.95).
//Using math, calculate the total cost, and using concatenation, create the text:
//'Total cost: $__'. (hint: calculate in cents to avoid inaccuracies)

var coffee = 599;
var bagel = 295;
var txt = 'Total cost: $';

function totalCost(){
    return txt + ((coffee+bagel)/100);
}

var totalRes = totalCost();

console.log(totalRes);