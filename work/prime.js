
function Prime(number) {
    if (number <= 1) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            return false;
        }
    }
    return true;
}

console.log("Prime numbers in the range of 0 to 200:");
for (let i = 0; i <= 200; i++) {
    if (Prime(i)) {
        console.log(i);
    }
}


