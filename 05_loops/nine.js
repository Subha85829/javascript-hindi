const myNums = [1,2,3]


// const mytotal = myNums.reduce(function (acc, currVal) {
//     console.log(`acc : ${acc} and currval : ${currVal}`);
//     return acc + currVal;
// }, 0);


const mytotal = myNums.reduce((acc,currVal) => acc + currVal, 0)

//console.log(mytotal);


const shoppingCart = [
    {
        itemName : "Js",
        price : 999
    },
    {
        itemName : "C#",
        price : 1200
    },
    {
        itemName : "Python",
        price : 899
    },
    {
        itemName : "Java",
        price : 499
    }
]


const totalPrice = shoppingCart.reduce((acc,currVal) => acc + currVal.price, 0);

console.log(totalPrice);