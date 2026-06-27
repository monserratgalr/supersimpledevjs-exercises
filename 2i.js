//Calculate the order total at the bottom//

var basketball = 20.95;
var tshirt = 7.99;
var toaster = 18.99;
var tax = 0.1;
var shipping = 4.99;

function totalOrder(){
    return basketball+tshirt+toaster+shipping;
}

var totalResult = totalOrder();

function taxApplied(){
    return (totalResult * tax);
}

var taxResult = taxApplied();

var total = Math.round(taxResult + totalResult);
console.log("The total cost with a 10% tax is: ", total);



