//Do the same as 3g, but use a template string and interpolation//

var coffee = 599;
var bagel = 295;
var txt = 'Total cost: $';

function totalCost(){
    return txt + `${((coffee+bagel)/100)}`;
}

var totalRes = totalCost();

console.log(totalRes);