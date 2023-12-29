console.log(2 > 1);


// In JavaScript comparison and equality are treated differently
console.log(null > 0); // false => while using the comparison operator null will be converted to 0 thus this is false.
console.log(null == 0); // false => as this try to check the datatype and thus get false.
console.log(null >= 0); // true => as the null when converted to 0 and now when this operator is checked thus it returns true

// strict check "==="

console.log("2" === 2); // return false 