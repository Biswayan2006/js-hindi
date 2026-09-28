// const tinderUser =new Object() // singleton object
const tinderUser = {} // non singleton object

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Hitesh",
            lastname: "Choudhary"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {
    1: "a",
    2: "b"
}
const obj2 = {
    3: "c",
    4: "d"
}
const obj4 = {
    5: "e",
    6: "f"
}
// const obj3 = {obj1, obj2}
// const obj3 = Object.assign({},obj1, obj2, obj4) // object assign

const obj3 = {...obj1, ...obj2, ...obj4} // spread operator to join 2 or more objects
// console.log(obj3);

const users = [
    {
        id: 1,
        email: "h1@email.com"
    },
    {
        id: 2,
        email: "h2@email.com"
    },
    {
        id: 3,
        email: "h3@email.com"
    },
]
users[1].email
// console.log(tinderUser);


// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn')); // returns true
// console.log(tinderUser.hasOwnProperty('isLogged')); // returns false


const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}

// course.courseInstructor

const {courseInstructor: instructor} = course

console.log(instructor); // object destructuring in js

// const navbar = ({company}) => {

// }
// navbar(company = "hitesh") // object destructing in js for react

// {
//     "name": "hitesh",
//     "coursename": "js in hindi",   // **this is how json looks like **
//     "price": "free"
// }

[
    {},
    {},
    {}
]