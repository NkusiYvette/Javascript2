let age;
let sum;
let meanAge;
function getmeanAge(){
    sum = 0;
    for (let i = 0; i < age.length; i++){    
    sum += age[i];
    meanAge = sum / age.length;
    }
}
age = [9,10,11,12,13,45,65,34,23];
getmeanAge();
console.log("Mean1:", meanAge);