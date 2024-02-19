// for of loop -- Array specific loop

// ["", "", ""]
// [{}, {}, {}]


// const arr = [1,2,3,4,5];

// for (const num of arr) {
//     console.log(num);
// }

const greetings = "hello world";

// for (const char of greetings) {
//     console.log(char);
// }

// Maps 

const map = new Map();
map.set('IN', 'INDIA')
map.set('USA', 'UNITED STATES OF AMERICA')
map.set('FR', 'FRANCE')

// console.log(map);

for (const [key,value] of map) {
    //console.log(key,value);
}

// for objects

const myObjs = {
    'game1' : 'NFS',
    'game2' : 'Spiderman',
    'game3' : 'Batman',
}

for (const [key,value] of myObjs) {
    console.log(key,value);
}