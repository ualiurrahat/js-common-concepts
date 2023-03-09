// we can get undefined in 8 ways in js 
// 1. variable that is not initialized give undefined as value 
// 2. function with no return but needed to return 
// 3. parameter that is not passed will be undefined
// 4. if what we want to return is not mention, then undefined will be returned
// 5. Accessing non existing property will show undefined
// 6. accessing array elements on non existing index
// 7. accssing a deleted elements of an array 
// 8. set value of a variable as undefined



// 1. variable that is not initialized give undefined as value 
let a;
console.log(a);

// 2. function with no return but needed to return 
function sum(a, b) {
    let result = a + b;
    // we did not return result
}
console.log(sum(10, 20));


// 3. parameter that is not passed will be undefined
function print(a, b, c, d) {
    console.log(a, b, c, d);
}
print(10, 20); // will show undefined for c,d

//  4. if what we want to return is not mention, then undefined will be returned
function noNegative(a, b) {
    if (a < 0 || b < 0) {
        return;
        // we did not say what will return. 
        // hence it will return undefined
    }
    return a + b;
}
console.log(noNegative(2, -5));
// 5. Accessing non existing property will show undefined
const rahat = { name: 'rahat', age: 21, address: 'tongi' };
console.log(rahat.address, rahat.salary); // rahat.salary will show undefined

// 6. accessing array elements on non existing index
const numbers = [10, 20, 30, 40];
console.log(numbers[200]);

// 7. accssing a deleted elements of an array 
delete numbers[0];
// this is bad practice. use splice in order to delete array elements
console.log(numbers[0]);

// 8. set value of a variable as undefined
let para = undefined;
// this is bad practice. if needed, set null as value. but do not use undefined

// checkout typeof undefined and null
console.log(typeof undefined);
console.log(typeof null);