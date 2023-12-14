let b = 10;
try {
   
} finally {
}
console.log(b); // -> 5
//catch and finally
let a = 10;
try {
a = b; // ReferenceError
} catch (error) {
console.log("An Error!"); // -> An Error!

} finally {
console.log("Finally!"); // -> Finally!
}
console.log(a); // -> 10