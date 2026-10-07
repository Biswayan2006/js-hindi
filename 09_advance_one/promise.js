const promiseOne = new Promise(function (resolve, reject) {
  // do an async task
  // db calls, cryptography, network
  setTimeout(function () {
    console.log("Async task is complete");
    resolve();
  }, 1000);
});

promiseOne.then(function () {
  console.log("Promise consumed");
});

new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log("async task 2");
    resolve();
  }, 1000);
}).then(function () {
  console.log("async 2 resolved");
});

const promiseThree = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve({userName: 'Chai', email: 'chai@example.com'})
  }, 1000);
});

promiseThree.then(function (user) {
    console.log(user);
    
});

const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if(!error){
            resolve({username: 'hitesh', password: '123'})
        }
        else {
            reject('ERROR: Something went wrong')
        }
    },1000)
})
promiseFour
.then((user)=> {
    console.log(user);
    return user.username
    
})
.then((username)=> {
    console.log(username);
    
})
.catch(function(error){
    console.log(error);
    
})
.finally(function(){
    console.log('the promise is either resolved or rejected');
    
})

const promisefive = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true
        if(!error){
            resolve({username: 'javaScript', password: '123'})
        }
        else {
            reject('ERROR: JS went wrong')
        }
    },1000)
})

async function consumePromisefive() {
    try {
        const response = await promisefive
    console.log(response);
    } catch (error) {
        console.log(error);
        
    }
    
}

consumePromisefive()

// async function getAllUsers() {
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')
//         // console.log(response);
        
//     const data = await response.json()
//     console.log(data);
    
//     } catch (error) {
//         console.log("E: ", error);
        
//     }
// }
// getAllUsers()

fetch('https://jsonplaceholder.typicode.com/users')
.then((response)=>{
    return response.json()
})
.then((data)=>{
    console.log(data);
    
})
.catch((error)=>{
    console.log(error);
    
})