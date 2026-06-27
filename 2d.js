//Calculate a 10% tax for the total in exercise 2c.

var toaster = 18.50;
var shirts = 7.50;
var tax = 0.1;

function totalShopping(){
    return (shirts*2)+toaster;
}

var totalShoppingResult = totalShopping();

function taxApplied(){
    return totalShoppingResult * tax;
}

var taxResult = taxApplied();
var totalWithTax = totalShoppingResult + taxResult;

console.log("The total cost is: ", totalShoppingResult);
console.log("The of the tax applied is: ", taxResult);
console.log("The total with the tax applied is: ", totalWithTax);