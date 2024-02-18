let a = 10;
const b = 20;
var c = 30;


function One(name) {
    const userName = name;

    function two() {
        const website = "YouTube";
        console.log(`The userName is ${userName}`);
    }
    //console.log(website);
    two();
}

One("Subhasish");

if (true) {
    const username = "Subhasish"
} 


// +++++++++++++++++ Interesting ++++++++++++++++++

// normal function
function Addone(num) {
    return num + 1;
}

Addone(5);

// Another way of calling function using variable

const addTwo = function(num) {
    return num + 2;
}

addTwo(7);