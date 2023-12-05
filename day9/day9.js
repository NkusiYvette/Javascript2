let str = "123";
let n1 = +str;
let n2 = -str;
let n3 = -n2;
let n4 = +"abcd";
console.log(`${str} : ${typeof str}`); // -> 123 : string
console.log(`${n1} : ${typeof n1}`); // -> 123 : number
console.log(`${n2} : ${typeof n2}`); // -> -123 : number
console.log(`${n3} : ${typeof n3}`); // -> 123 : number
console.log(`${n4} : ${typeof n4}`); // -> NaN : number

//binary arithmetic operators
let x = 10;
x += 2;
console.log(x); // -> 12
x -= 4;
console.log(x); // -> 8
x *= 3;
console.log(x); // -> 24
x /= 6;
console.log(x); // -> 4
x **= 3;
console.log(x); // -> 64
x %= 10;
console.log(x); // -> 4

//logical operators
console.log(true || true); // -> true
console.log(true || false); // -> true
console.log(true && true); // -> true
console.log(true && false); // -> false

const a = false;
const b = true;
const c = false;
const d = true;
console.log(a && b && c || d); // -> true
console.log(a && b && (c || d)); // -> false
//delete 
let user = {
    name:"Bebe",
    age:6
};
console.log(user.age);
delete user.age
console.log(user.age);
console.log(user.name);

var result = 2 + 3 * 4;  // Multiplication has higher precedence
console.log(result);     // Output: 14

var resultWithParentheses = (2 + 3) * 4;  // Addition inside parentheses is evaluated first
console.log(resultWithParentheses);       // Output: 20


console.log(2 + 5 * 3 - 1);      // expected 7
console.log(2 * 4 * 2 / 4);       // expected 16
console.log(5 * 1 + 1);           // expected 5
console.log(8 * (2 + 5) - 1 * 2); // expected 39


