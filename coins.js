
function coinCounter (input) {
  // Initialize a JavaScript object to hold the coins
var remainder;
  var coinPurse = {
    quarters:0 ,
    dimes: 0,
    nickels:0,
    pennies: 0
  };

var quarters = input - (input % .25);
coinPurse.quarters = quarters / .25;
// console.log(coinPurse.quarters);
remainder = input - quarters;
// console.log(remainder);
var dimes = remainder - (remainder % .10);
coinPurse.dimes = dimes / .1;
// console.log(coinPurse.dimes);
remainder = input - quarters - dimes;
// console.log(remainder);
var nickels = remainder - (remainder % .05);
// console.log(pennies);
coinPurse.nickels = nickels / .05;
// console.log(coinPurse.pennies);
remainder = input - quarters - dimes - nickels;
var pennies = remainder - (remainder % .01);
coinPurse.pennies = pennies / .01;
console.log(coinPurse);
}



coinCounter(.68);

