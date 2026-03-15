const accountId = 123323  // variable which cannot be changed
let accountEmail = "idemdepak@gmail.com"
var accountPassword = "2342312"
/*
Prefer not to use 'var'
because of issue with block scope and functional scope
*/

accoutCity = "BKSC" // avoid using this as well without defining any data types

let accountState;   // this will return as undefined as no vlaues are provided.


// accountId = 2   // not allowed modification
accountEmail = "ihdi@gmail.com"
accountPassword = "2u8302"
accoutCity = "bengaluru"
console.log(accountId);


console.table([accountId, accountEmail, accountPassword, accoutCity, accountState])