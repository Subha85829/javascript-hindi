// Singleton -- Using ctor
// Object.create

// Objects Literals
//try for a symbol to use as a key - value

const mySym = Symbol("Key1")
const Jsuser = {
    name : "Subhasish",
    "full name" : "Subhasish Modak",
    [mySym] : "newSym1",
    age : 18,
    location : "kolkata",
    email : "subthehuman@microsoft.com",
    isLoggedIn : false,
    lastLoginDays : ["Monday", "Saturday"]
}

// Usually coders access in this way -- Not an appropriate way

// console.log("Email is : " + Jsuser.email);
// console.log("Email is : " + Jsuser["email"]);

// console.log("fullname is : " + Jsuser["full name"]);

// console.log(typeof Jsuser[mySym]);


// Jsuser.email = "subhasish@google.com"
// console.log("Email is : " + Jsuser["email"]);
// Object.freeze(Jsuser);

// Jsuser.age = 25;
// console.log(`Age is ${Jsuser["age"]}`);
// console.log(Jsuser);

Jsuser.greetings = function () {
    console.log("Hello from Subhasish");
}
Jsuser.greetingsTwo = function () {
    console.log(`Hello from ${this["full name"]}`);
}

console.log(Jsuser.greetings());
console.log(Jsuser.greetingsTwo());
