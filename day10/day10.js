const INSURANCE_COST = 2.99;
let Cost = 9.99;
let isOrderValid = true;
let userAge = 22;
let points = 400;
let cartValue = 199;
let hasPromoCode = false;
let hasParentsApproval = false;
let addInsurance = true;

/** calculate shipping cost*/
if ((userAge > 65) || (userAge >= 21 && (hasPromoCode || cartValue > 300 || points > 500))) 
{
 
Cost = 0;
} else if (userAge < 21 && hasParentsApproval) {
Cost =Cost - 5;
} else if (userAge < 21) {
isOrderValid = false;
}

/** take account of insurance */
if (isOrderValid && addInsurance && !hasPromoCode) {
Cost += INSURANCE_COST;
}

let price = 100;
let shippingCost = price > 50 ? 0 : 5;
console.log(`price = ${price}, shipping = ${shippingCost}`); // -> price = 100, shipping = 0

// Ask the user to input a number
let userInput = prompt("Enter a number:");

// Convert the user input to a number
let userNumber = parseFloat(userInput);

// Check if the number is greater than 90 but less than 110
if (userNumber > 90 && userNumber < 110) {
  console.log("Bingo!");
} else {
  console.log("Miss");
}
