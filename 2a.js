//At a restaurant you order a soup for $10, 3 burguers for $8 each and 1 ice cream for $5. Use JS to calculate the cost of the order

var soup = 10;
var burguers = 8;
var icecream = 5;

function totalOrder(){
    return (burguers*3)+soup+icecream;
}

var orderResult = totalOrder();

console.log("The total cost of the order is: ", orderResult);