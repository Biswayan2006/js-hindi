// Dates

let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(typeof myDate);

// let myCreatedDate = new Date(2025,0,32)
// let myCreatedDate = new Date(2025,0,32,5,3)
// let myCreatedDate = new Date(2025,0,32,5,3)
// let myCreatedDate = new Date("2025-01-14")
let myCreatedDate = new Date("01-14-2025")
// console.log(myCreatedDate.toDateString());
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()
// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate);
console.log(newDate.getDay());
console.log(newDate.getMonth() + 1);

// `${newDate.getDay()} and the time is `

newDate.toLocaleString('default',{
    weekday: "long",
    timeZone: ''
})