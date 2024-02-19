// for in loop for objects

const myObject = {
    js : 'JavaScript',
    cpp : 'C++',
    rb : 'Ruby',
    swift : 'Swift by Apple'
}

// for (const key in myObject) {
//     console.log(`${key} shortcut is for ${myObject[key]}`);
// }

// for in loop for array

const prog = ['C++', 'Python', 'C#', 'JavaScript', 'Java', 'Ruby'];

for (const key in prog) {
    //console.log(prog[key]);
}


// for in loop for Map

const map = new Map();
map.set('IN', 'INDIA')
map.set('USA', 'UNITED STATES OF AMERICA')
map.set('FR', 'FRANCE')

for (const key in map) {
    console.log(key);
}
