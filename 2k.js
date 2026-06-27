//Lets always round a number down//

const nums = [2.3, 5.6, 7.6];

function numbersUp(){
    return nums.map(Math.ceil);
}

var numsResult = numbersUp();

console.log("The numbers rounded up are: ", numsResult);