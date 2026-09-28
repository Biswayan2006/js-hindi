// Immediately Invoked Function Expressions


// function chai(){
//     console.log(`DB CONNECTED`);
    
// }
// chai()
(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
    
}()); // IIFE -> global scope k pollution se problem hoti hai kayi baar, toh us global scope k jo variables hai us pollutions ko hatane k liye IIFE ka use hota hai

//()(); // execution call we need this ; to end an IIFE else it shows some error

( (name) => {
    // un named IIFE
    console.log(`DB CONNECTED TWO ${name}`);
    
})("hitesh");