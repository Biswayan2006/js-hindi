const user = {
    username: 'hitesh',
    loginCount: 8,
    signedIn: true,
    getUserDetails: function(){
    // console.log("Got user details from database");
    // console.log(`Username: ${this.username}`);
    //console.log(this);
    
    }
}

//console.log(user.username);
// console.log(user.getUserDetails());
// console.log(this);
    
// const promiseOne = new Promise()
// const date = new Date()     // new is a constructor function

function User(username, loginCount, isLoggedIn){
    this.username = username
    this.loginCount = loginCount
    this.isLoggedIn = isLoggedIn

    this.greetings = function(){
        console.log(`welcome, ${this.username}`);
        
    }
    return this
}

const userOne = new User('hitesh', 11, true)
const userTwo = new User('chai Aur Code', 12, true)
console.log(userOne.constructor); 
// console.log(userTwo); 


//#########################################
// 1. naya object create ho rha hai
// 2. constructor function call ho rha hai new keywoard k karan
// 3. this keyboard k andar arguement wagera inject ho jate hai 
// 4. aapko mil jaet hai function k andar

// instanceof method in js 
