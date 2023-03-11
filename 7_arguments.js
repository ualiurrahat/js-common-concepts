function add(a,b,c) 
// a,b,c->paramereter
{
    console.log(arguments);
    console.log(arguments[3]);
    // arguments return an array like objects
    // containing all the arguments sent with the function.
    // arguments can be run with for of loop, but can not use
    // array methods like map,filter,push,pop etc
    
    // converting arguments into an array
    const args = [... arguments];
    console.log(args);
    return a+b+c;
}

function check(a,b)
{
    console.log(a,b);
}

console.log(add(10,20,30,40,50));

// functionName.length returns total no. of parameter the function has
console.log(check.length, add.length);