//Using a multi-line string,create the text from 3h and add a line of 
//text underneath: 'Thank you, come again!'. Display both in a popup//

var coffee = 599;
var bagel = 295;
var txt = 'Total cost: $';

function totalCost(){
    return txt + `${((coffee+bagel)/100)}`;
}

var totalRes = totalCost();

alert(`
    ${totalRes}
Thank you, come again!
`);

console.log(totalRes);