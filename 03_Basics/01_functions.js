function sayMyName(){
    console.log("Subhasish");
}

sayMyName();

// function addTwoNumbers(number1, number2){
//     console.log(number1 + number2);
// }


function addTwoNumbers(number1, number2){
    let result = (number1 + number2);
    return result;
}
const result = addTwoNumbers(4, 7);
// console.log(result);

// function loginUserMessage(userName = "sam"){
//     if(!userName){
//         console.log("Please enter a username");
//         return;
//     }
//     return `${userName} just logged in`
// }

// console.log(loginUserMessage());


function calculateCartPrice(...num1){
    return num1;
}

console.log(calculateCartPrice(200,400,500));

const user = {
    username : "Subhasish",
    price : 599
}
function handleObject(anyObject) {
    console.log(`username is ${anyObject.username} and price is ${anyObject.price}`);
}

// handleObject(user);

handleObject({
    username: "Tatun",
    price: 6000
});

const myNewArray = [200,300,400]

function returnSecondValue(getArray) {
    return getArray[1];
}

console.log(returnSecondValue(myNewArray));