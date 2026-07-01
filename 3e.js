// DO the same as 3d, but use a template string and interpolation//

var str1 = 'Total cost: $'
var num1 = 5;
var num2 = 3;

function totalCost(){
    return str1 + `${(num1+num2)}`;
}

var totalRes = totalCost();

console.log(totalRes);