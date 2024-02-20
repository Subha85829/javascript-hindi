const coding = ['C#', 'Java', 'Python','C++']

// foreach doesnot return values;

// say

// const multipleval = coding.forEach((val) => {
//     console.log(val);
//     return val;
// })

// console.log(multipleval);

// filters
const myNumbers = [1,2,3,4,5,6,7,8,9,10];

// const val = myNumbers.filter((num) => num > 5)

// console.log(val);

// when using scope {} in filter then you must return

// const val = myNumbers.filter((nums) => {
//     return nums > 5;
// })

// using foreach
const newNums = []

myNumbers.forEach((nums) => {
    if (nums > 5) {
        newNums.push(nums);
    }
})

console.log(newNums);


// exploring more abouts filters

const books = [
    {
        title : 'Book1', genre : 'Fiction', publish : 1981, editon : 2008
    },
    {
        title : 'Book2', genre : 'Horror', publish : 1991, editon : 2009
    },
    {
        title : 'Book3', genre : 'Adventurous', publish : 1971, editon : 2018
    },
    {
        title : 'Book4', genre : 'Romantic', publish : 1951, editon : 2013
    },
    {
        title : 'Book5', genre : 'Science', publish : 1978, editon : 2018
    },
    {
        title : 'Book6', genre : 'Fiction', publish : 1987, editon : 2019
    },
    {
        title : 'Book7', genre : 'History', publish : 1989, editon : 2012
    },
    {
        title : 'Book8', genre : 'Fiction', publish : 1983, editon : 2014
    }
]


const userBooks = books.filter((bk) => bk.genre === "Fiction" && bk.editon > 2009)

console.log(userBooks);