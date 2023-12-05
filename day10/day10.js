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