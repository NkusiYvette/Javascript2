let base = parseFloat(prompt("Enter the base number:"));

let exponent = parseFloat(prompt("Enter the exponent:"));

if (!isNaN(base) && !isNaN(exponent)) {

    let result = Math.pow(base, exponent);
    
    console.log(base +" power "+exponent+ " is: "+result);
} else {
    console.log("Please enter e base and exponent.");
}