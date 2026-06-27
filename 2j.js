//Let's say we always want to round a number down (2.8=>2). Using Google or an AI tool search for the code to do this//


const nums = [2.8, 5.6, 7.5];

function numbersDown(){
    return nums.map(num => Math.floor(num));
}

var numbersResult = numbersDown();

console.log("The numbers rounded down are: ", numbersResult);