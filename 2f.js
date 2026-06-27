//Calculate the total cost of the products (before shipping and taxes). Hint: calculate in cents to avoid inaccuracies//

var basketball = 2095;
var tshirt = 799;
var toaster = 1899;

function beforeShipping(){
    return Math.round(basketball+tshirt+toaster)/100;
}

var beforeResult = beforeShipping();

console.log("The total cost before shipping is: ", beforeResult);