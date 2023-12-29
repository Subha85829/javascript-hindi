let score = "33";
let newScore = "33aa"

// two ways to know the type of a variable

console.log(typeof score);
console.log(typeof(score));

// converting the string to number

let valueInNumber = Number(score);
console.log(typeof valueInNumber);

// Converting newScore to number 

let newValueInNumber = Number(newScore);
console.log(typeof newValueInNumber);

console.log(typeof newValueInNumber);
console.log(newValueInNumber); // Returns NaN => Not a number


// Converting null to number => gets converted to 0

let nullScore = null;

let nullValueInNumber = Number(nullScore);
console.log(typeof nullValueInNumber);
console.log(nullValueInNumber);


/* Summarizing when you convert from any other type to number then,
    "33" => 33
    "33abc" => NaN
    true => 1; false => 0;
*/

// -------------------------------------------------------------------------------------------------

// Converting from other dataType to bool
let loggedIn = 1;

let booleanIsLoggedIn = Boolean(loggedIn);
console.log(booleanIsLoggedIn);

// for boolean
    // 1 => true; 0 => false;
    // "" => false;
    // "Subhasish"


//--------------------------------------------------------------------------------------------------

// converting from other dataType to string

let someNumber = 33;

let stringNumber = String(someNumber);
Console.log(typeof stringNumber);