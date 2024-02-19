// if statement

const isUserLoggedIn = true;

if (isUserLoggedIn) {
    
}

// switch statements

// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }

const month = 3;
switch (month) {
    case 1:
        console.log("January");
        break;
    case 2:
        console.log("February");
        break;
    case 3:
        console.log("March");
        break;
    case 4:
        console.log("April");
        break;
    default:
        console.log("Default case match");
        break;
}

// truthy and falsy

const getUserEmail = "subthehuman@gmail.com"

if(getUserEmail){
    console.log("Got the user email");
}else{
    console.log("Didn't get the user email");
}

// falsy value --

// false, 0, -0, BigInt - 0n, "", null, undefined, NaN

// truthy value -- 
// "0", 'false', " ", [], {}, function(){}

// for array
const arr = [];
if (arr.length === 0) {
    console.log("Array is empty.");    
}

// for objects

const obj = {};
if(Object.keys(obj).length === 0){
    console.log("Object is empty");
}

// nullish Coalescing operator (??) : used for null, undefined

let val;
// val1 = 5 ?? 10;
val1 = null ?? 10;

console.log(val1);

// ternary operator

// condition ? true : false;

const iceTeaPrice = 200;

iceTeaPrice <= 80 ? console.log("less than 80") : console.log("Greater than 80");