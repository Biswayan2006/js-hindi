// if

// if(condition){

// }

// if(true){
    
// }
// if(false){
    
// }

// const isUserLoggedIn = true

// if(isUserLoggedIn){

// }

// <, >, <=, >=, ==, !=, ===, !==

// const temperature = 41

// if(temperature <50){
//     console.log("less than 50");
    
// }
// else {
//     console.log("temperature is greater than 50");
// }
// console.log("execute");

// const score = 200

// if(score > 100){
//     const power = "fly"
//     console.log(`User power: ${power}`);
    
// }
// console.log(`User power: ${power}`);

// const balance = 1000

 // if(balance > 500) console.log("test"), console.log("test2");
  // implicit scope and we dont write code like this its a bad practice


// if(balance < 500) {
//     console.log("less than 500");
    
// }
// else if (balance < 750) {
//     console.log("less than 750");
// }
// else if (balance < 900) {
//     console.log("less than 900");
// }
// else {
//     console.log("less than 1200");
    
// }

const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInfromEmail = true

if(userLoggedIn && debitCard && 2==2 ){ // && max 2 we can use at a time 
    console.log("Allow to buy course");
}

if(loggedInfromEmail || loggedInFromGoogle){
    console.log("User logged in");
    
}