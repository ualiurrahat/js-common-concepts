// always use ===
// equal comparison does not work for non-primitive data types


// ==, check values
// === , check values and data types
// == performs type coercion, type conversion


const a = 2;
const b = '2';
if (a == b) {
    console.log("equal");
}
else {
    console.log("not equal");
}

// for non primitive data types, if reference is same, then they are equal.
// otherwise not equal.

const first = [10, 20, 30];
const second = [10, 20, 30];
const third = first;

console.log(first === second ? "== equal" : "== not equal"); // reference not same, so not equal
console.log(first === third ? "== equal" : "== not equal"); // reference same , so equal