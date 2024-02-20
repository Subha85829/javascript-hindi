const myNumbers = [1,2,3,4,5,6,7,8,9,10];

// const val = myNumbers.map((nums) => nums + 10);


// chaining

const val = myNumbers
            .map( (nums) => nums * 10)
            .map( (nums) => nums + 1)
            .filter( (nums) => nums >= 40 );


console.log(val);
