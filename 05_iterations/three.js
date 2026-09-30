// for of

// ["", "", ""]
// [{},{},{}]

const arr = [1,2,3,4,5]

for (const num of arr) {
    //console.log(num);
    
}

const greetings = "hello world"
for (const greet of greetings) {
    if(greet === " "){
        //console.log(`space found in between`);
        break
        
    }
    //console.log(`each char is ${greet}`);
    
}

// Maps

const map = new Map()
map.set('IN', "INDIA")
map.set('USA', "United states of america")
map.set('Fr', "France")
//console.log(map);


//for (const key of map) 
for (const [key, value] of map) {       // array desturcture 
    // console.log(key, ':-', value);
    
} // maps are iterable where as objects are not

const myObject = {
    Game1 : 'nfs',
    Game2 : 'spooderman'
}

for (const [key, value] of myObject) {
    // console.log(key);
    // for of doesnt works here
}