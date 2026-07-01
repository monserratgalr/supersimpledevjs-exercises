//Display the text from 3h in a popup//

var coffee = 599;
var bagel = 295;
var txt = 'Total cost: $';

function totalCost(){
    return txt + `${((coffee+bagel)/100)}`;
}

var totalRes = totalCost();

alert(totalRes);
console.log(totalRes);