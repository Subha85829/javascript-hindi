const tinderUser = new Object(); // Singleton Obj

//const tinderUser1 = {} -- Non singleton Object
tinderUser.id = "123abc";
tinderUser.name = "Honey";
tinderUser.isLoggedIn = false;
//console.log(tinderUser);
// console.log(tinderUser1);
const regularUser = {
    email : "somename@gmail.com",
    fullname :{
        userFullname : {
            firstName : "Subhasish",
            lastName : "Modak"
        }
    }
}

// console.log(regularUser.fullname.userFullname.firstName);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}

// const obj3 = {obj1, obj2};
// const obj3 = Object.assign({},obj1,obj2) 
const obj3 = {...obj1,...obj2};
console.log(obj3);

// How data comes from data base -- list of Arrays

const users = [
    {
        id : 1,
        name : "Name1",
        email : "name1@gmail.com"
    },
    {
        id : 2,
        name : "Name2",
        email : "name2@gmail.com"
    },
    {
        id : 3,
        name : "Name3",
        email : "name3@gmail.com"
    },
    {
        id : 4,
        name : "Name4",
        email : "name4@gmail.com"
    }
]

users[0].email

// using tinder to get all keys or values

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));

// Entries are used to return keys values in Array

console.log(Object.entries(tinderUser));

// Destructuring of objects

const course = {
    courseName : "JS in Hindi",
    coursePrice : 999,
    courseInstructor : "Hitesh"
}

const {courseInstructor : instructor} = course;

console.log(instructor);