// a callback function is a function that is sent as a paramertor of another function and called within that function 

function greeting(greetHandler, name) {
    greetHandler(name);
}


function greetMorning(name) {
    console.log("Good Morning ", name);
}
function greetEvening(name) {
    console.log("Good Evening ", name);
}
function greetNight(name) {
    console.log("Good Night ", name);
}

greeting(greetMorning, "ahnaf");
greeting(greetEvening, "ayash");
greeting(greetNight, "maimuna");