const coding = ['js','ruby','java','python','cpp']

// coding.forEach( function (item) {
//     console.log(item);
    
// } ) // callbackfn hence no fn name

// coding.forEach((item) => {
//     console.log(item);
    
// }) same for arrow function as well

// function printme(item){
//     console.log(item);
    
// }

// coding.forEach(printme) // function ka refrence dena hai function ko execute nhi karna hai its not printme() its just printme ok????????? hell yeaaah

// coding.forEach((item, index, arr)=> {
//     console.log(item,index, arr);
    
// })

const mycoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    }
]

mycoding.forEach( (item)=> {
    console.log(`${item.languageName} has the following file name ${item.languageFileName}`);
    
})  // taking access of objects in an array using forEach() mostly used in db