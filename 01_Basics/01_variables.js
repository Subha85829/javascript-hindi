const accountId = 144553;
let accountEmail = "subhasish.modak@mircometa.com";
var accountPassword = "12345";
accountCity = "Jaipur";

let accountState; // undifined 

// accountId = 322;

console.log(accountId);

// trying to change other variables

accountEmail = "tatun222@gmail.com"
accountPassword = "987456"
accountCity = "Kolkata"

// Prefer not to use var -- because of issues in the block and functional scope

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])