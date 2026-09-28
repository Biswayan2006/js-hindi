

function sayMyName() {
    console.log("H");
    console.log("i");
    console.log("t");
    console.log("e");
    console.log("s");
    console.log("h");
}
 
// sayMyName()

// function addTwoNumbers(number1, number2) { // parameters
//     console.log(number1 + number2);
// }

function addTwoNumbers(number1, number2) { // parameters
    
    // let result = number1 + number2
    // console.log("hitesh");
    // return result
     return number1 + number2  
}

const result = addTwoNumbers(3, 5) // arguments 

// console.log("Result:", result);

function loginUserMessage(username = "Sam Altman"){
    if(username === undefined){
    // if(!usernam){
        console.log("please enter a user name");
        return
        
    }
    return `${username} just logged in`
}
// console.log(loginUserMessage("hitesh"))
// console.log(loginUserMessage());

function calculateCartPrice(val1, val2, ...num1) {   // rest operator
    return num1 
}

// console.log(calculateCartPrice(200, 400, 500, 2000));

const user = {
    username: "hitesh",
    price: 199
}

function handleObject(anyObject){
    console.log(`User name is ${anyObject.username} and price is ${anyObject.price}`);
    
}

// handleObject(user)
handleObject({
    username: "sam",
    price: 399
})

const myNewArray = [200,300,400,500]

function returnSecondValue(getArray){
    return getArray[0]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200,400,1000,500]));
