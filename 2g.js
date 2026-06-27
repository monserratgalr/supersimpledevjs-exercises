//Calculate the total before tax//

var basketball = 2095;
var tshirt = 799;
var toaster = 1899;
var shipping = 499;

function beforeTax(){
    return Math.round(basketball+tshirt+toaster+shipping)/100;
}

var beforeResult = beforeTax();

console.log("The total cost before shipping is: ", beforeResult);