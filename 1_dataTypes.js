

let x = 25;
let y = x;
console.log("x = " + x + " y = " + y);

y = 8;
console.log("x = " + x + " y = " + y);


let a = { job: "web developer" };
let b = a;
console.log(a, b);
// b is a reference to a.
// so a and b are showing same value

// now change value of b.job
b.job = "data engineer";
console.log(a, b);
// since a and b are in same location
// so both a and b's job got changed

// now change b
// b = {job:"data sceintist"};
console.log(a, b);
// now b is actually reassigned.
// so b wil be given new address in memory and will be changed