// var c = 300         // global scope

let a = 300

if(true) {          // block scope
    let a =10
    const b = 20
    //console.log("INNER: ",a);
    function addNum(){

    }
}
//console.log(a);
// console.log(b);
//console.log(c);

function one(){
    const username = "hitesh"

    function two(){
        const website= "youtube"
        console.log(username);
        
    }
    //console.log(website);
    two()
}

//one()

if (true) {
    const username = "hitesh"
    if (username === "hitesh"){
        const website = " youtube"
        //console.log(username + website);
        
    }
    //console.log(website);
    
}
//console.log(username);


// +++++++++++++++++++++ interesting ++++++++++++++++++

addOne(5) // works

function addOne(num){
    return num + 1
}


addTwo(5) // error -> js hoisting

const addTwo = function(num){ // expression
    return num + 2
}
