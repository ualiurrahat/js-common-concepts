// ways to get true value:
// 1. true
// 2. any number except 0
// 3. any string except empty string (even string with spaces give true value)
// 4. object,array(even empty object,array)

// ways to get false value 
// 1. 0
// 2. empty string =''
// 3. null
// 4. undefined
const x =2;
if (x) {
    console.log("true value");
}
else {
    console.log("false value");
}