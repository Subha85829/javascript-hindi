const coding = ['C#', 'Java', 'Python','C++']

coding.forEach(val => {
    //console.log(val);
});


coding.forEach( function (item){
    //console.log(item);
})

// function printMe(item){
//     console.log(item);
// }

// coding.forEach(printMe);

coding.forEach((item, index, mrr) => {
    console.log(item, index, mrr);
})

// objects inside Array

const myCoding = [
    {
        languageName : "JavaScript",
        languageFileName : "js"
    },
    {
        languageName : "Java",
        languageFileName : "java"
    },
    {
        languageName : "CSharp",
        languageFileName : "cs"
    }
]

myCoding.forEach( (item) => {
    //console.log(item.languageName);
})