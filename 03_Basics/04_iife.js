// immediately Invoked function Expressions (IIFE)


// normal function
// function Chai() {
//     console.log(`Data connected`);
// }

// Chai();

// iife using same normal code as above but using parenthesis link ()()

(function chai() {
    // Named iife
    console.log(`Data connected`);
}) ();


// using arrow funct using iife
((name) => {
    console.log(`Database 2 connected ${name}`);
}) ("Subhasish DB");
