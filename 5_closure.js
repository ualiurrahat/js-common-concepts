// Closure: An internal function can access its outer function's variable. 
// This is called closoure.
// Closure is added in function creation time
// all funciton in js has closure feature.


function stopWatch() {
    let count = 0;
    return function () {
        count++;
        return count;
    }
}

const clockOne = stopWatch();
console.log(clockOne);
// clockeOne is a function since stopWatch() returns a function

// get value from clockOne
console.log("clockOne value: " + clockOne());
console.log("clockOne value: " + clockOne());
console.log("clockOne value: " + clockOne());
console.log("clockOne value: " + clockOne());
console.log("clockOne value: " + clockOne());


// creating another function clockTwo 
const clockTwo = stopWatch();
console.log("clockTwo value: " + clockTwo());
console.log("clockTwo value: " + clockTwo());
console.log("clockTwo value: " + clockTwo());
console.log("clockTwo value: " + clockTwo());

console.log("clockOne value: " + clockOne());