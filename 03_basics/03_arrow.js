const user = {
    username: "hitesh",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username} , welcome to website`);  // this is for current context
        //console.log(this);
        
        
    }

}
// user.welcomeMessage()
// user.username = "Sam Altman"
// user.welcomeMessage()

//console.log(this);

// function chai(){
//     let username = "hitesh"
//     console.log(this.username);
    
// }
// chai()

// const chai = function() {
//     let username = "hitesh"
//      console.log(this.username);
// }
const chai = () => {
    let username = "hitesh"
     console.log(this);
}

// chai()

// const addTwo = (num1, num2) => { // explicit return we explicitly use return here
//     return num1 + num2
// }
// const addTwo = (num1, num2) => num1 + num2
//const addTwo = (num1, num2) => (num1 + num2) // implicit return (we donot need to use return here)

const addTwo = (num1, num2) => ({username: "hitesh"})

console.log(addTwo(3,4));

// const myArray = [2,3,4,5,6,7]

// myArray.forEach(()=>{})