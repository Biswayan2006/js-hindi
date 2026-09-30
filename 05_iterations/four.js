const myObject = {
    js: 'javascript',
    cpp: 'c++',
    rb: "ruby on rails",
    swift: "swift by apple"
}

for (const key in myObject) {
    //console.log(`"${key}" : shortcut is for ${myObject[key]}`);
    
}

const programming = ['js','ruby','java','cpp']

for (const key in programming) {
    //console.log(programming[key]);  
}

// const map = new Map() // map is not iterable hence no output for for in loop 
// map.set('IN', "INDIA")
// map.set('USA', "United states of america")
// map.set('Fr', "France")

// for (const key in map) {
//     console.log(key);
    
// }