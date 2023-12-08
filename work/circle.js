let radius = parseFloat(prompt("Enter radius"));
const Pi = 3.14;
function CircleArea(radius) {
    return Math.PI * radius * radius;
}


if (isNaN(radius) || radius < 0) {
    console.log("Please enter a valid positive number for the radius.");
} else {
    let area =CircleArea(radius);
    console.log("The area of the circle with radius " + radius + " is: " + area.toFixed(2));
}

//This is an area of Rectangle

let length =parseFloat(prompt("Enter length"));
let width = parseFloat(prompt("Enter the width"));
function RectangleArea(length,width){
    return length*width;
}

if (isNaN(length,width) || length,width < 0){
    console.log("Please enter a valid positive number for length and width.");

}else {
    let area = RectangleArea(length,width);
    console.log("The area of the Rectangle with length and width " + length + width + " is: " + area.toFixed(2));
}
