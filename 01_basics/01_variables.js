const accountId = 144553; //const can’t be changed 
let accountEmail = "arnika@google.com" //Can be reassigned but NOT redeclared in the same scope
var accountPassword = "12345"
accountCity = "Jaipur"
let accountState; // will remain undefined 


// trying to change the upper lines and noticing the changes 
// accountId = 2 //not allowed because const cant be changed hence not allowed
accountEmail = "hc@hc.com" 
accountPassword = "123123"
accountCity = "Mumbai"


console.log(accountId); //used to print any element i.e. one element. 


console.log([accountId, accountEmail, accountPassword, accountCity]) //multiple elements at same time 


console.table([accountId, accountEmail, accountPassword, accountCity]) //prints in a table 
