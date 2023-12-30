/* Primitive datatype value type
    1. String
    2. Number
    3. Boolean 
    4. Null
    5. Undefined
    6. Symbol
    7. BigInt
*/

const score = 100;
const scoreValue = 82.5; // int also contains decimals

const isLoggedIn = false;
const outSideTemp = null;
let userEmail; // --> Undefined

//symbol

const id = Symbol("123");
const anotherId = Symbol("123");

console.log(id == anotherId);

/* Reference type / Non Premitive

    1. Array
    2. Objects
    3. Functions

*/

// Arrays
const heros = ["Shaktiman", "Naagraaj", "Doga"];

//objects
let myObj = {
    name : "Subhasish",
    age : 22
}

const myFunction = function(){

}
