//Calculate the 10% tax exactly. Hint: use Math.round//

var basketball = 2095;
var tshirt = 799;
var toaster = 1899;
var tax = 0.1;

function beforeShipping(){
    return Math.round(basketball+tshirt+toaster);
}

var beforeResult = beforeShipping();

function taxApplied(){
    return Math.round(beforeResult + tax)/100;
}

var taxResult = taxApplied();
console.log("The total cost with a 10% tax is: ", taxResult);