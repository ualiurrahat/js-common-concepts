// ways to get true value:
// 1. true
// 2. any number except 0
// 3. any string except empty string (even string with spaces give true value)
// 4. any object including empty one
// 5. any funciton including empty one
// 6. any array including empty one

// ways to get false value 
// 1. 0
// 2. empty string =''
// 3. null
// 4. undefined
// 5. NaN
// 6. false
const x =2;
if (x) {
    console.log("true value");
}
else {
    console.log("false value");
}