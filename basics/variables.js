const accountId = 14453
let accountEmail = "pujita@gmail.com"
var accountPassword = "12345"
accountCity = "Jaipur"  //bad practice

let accountState;   //come as undefined

//accountID = 2 // const change is not allowed

accountEmail = "puja@gmail.com"
accountPassword = "21222222"
accountCity = "bengaluru"   


console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])

