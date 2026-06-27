//You're at a restaurant with 2 friends (3 people in total) and make the same order as 2a. Calculate how much each person pays//

var soup = 10;
var burguers = 8;
var icecream = 5;

function person1(){
    return (burguers*3)+soup+icecream;
}

var personTotal = person1();

function totalFriend(){
    return personTotal*3;
}

var friendsResult = totalFriend();

console.log("Each person has to pay: ", personTotal);
console.log("The total cost of the order is : ", friendsResult);