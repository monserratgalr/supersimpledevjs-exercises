//Calculate a 20% tax for the total in 2c. (Remember that 1% = 1/100, so 20% = 20/100 = 0.2)//

var toaster = 18.50;
var shirts = 7.50;
var tax = 0.2;

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
console.log("The total with the tax applied is: ", totalWithTax);