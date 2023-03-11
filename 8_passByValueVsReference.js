// primitive data types are passed by value in function 
// even though their value are changed inside the function,
// value remain unchanged in outer that function scope

let a = 10;
let b = 20;

function passByValue(a, b) {
    a = 30;
    b = 50;
}

console.log("before function call: a = " + a + " and b = " + b);
passByValue(a, b);
console.log("after function call: a = " + a + " and b = " + b);


// non primitive data types(object, array) are passed by reference
// if their valur or properties are changed,
// the changed show up on global scope

function passByReference(couple1, couple2)
{
    couple1.name = "kadam";
    couple2.name = "akbar";
}

const couple1 = {name:"minul", wife:"jorina"};
const couple2 = {name:"naeem", wife:"rahima"};
console.log("before function call:\n" ,couple1, couple2);
passByReference(couple1,couple2);
console.log("after function call:\n" ,couple1, couple2);
