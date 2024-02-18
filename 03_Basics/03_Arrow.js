// const user = {
//     username : "Subhasish",
//     price : 999,
//     welcomeMessage : function() {
//         console.log(`${this.username} , welcome to website`);
//         console.log(this);
//     }
// }

// user.welcomeMessage();
// user.username = "Sam";
// user.welcomeMessage();

// // In node "this" refer empty object in global context while in browser it denotes window object.
// console.log(this);




// function Chai(){
//     let user1 = "Subhasish";
//     console.log(this);
// }

// Chai();

// Arrow function 

const chai = () => {
    let user1 = "Subhasish";
    console.log(this);
}   

chai();

const addTwo = (num1, num2) => {
    return num1 + num2;
}

console.log(addTwo(5,7));

// Implecit return in arrow function 

const addThree = (num1,num2,num3) => ( num1+num2+num3); 

console.log(addThree(4,5,6));