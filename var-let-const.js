// Below is Example of Global & Functional variable 
var x =10 // This is Global declaration & scope is Global. We can use it Globally
function test(){
    var y = 100 // This is declared in a Test function and hence, we can use it in a function only
}

// 1. var : can be re-declared & re-initialised
//------------------------------------------------------------------------------------------------
// very old of declaring variables
// scope : functionally/locally + Globally also

/* var x =10 
function test(){
    var y = 100    
}
console.log(x) //We can access Globally

var q = "Hi JS"
function rel(){
    var w = "Hello JS"
}
rel()    
console.log(w) // This gives ReferenceError: w is not defined , as it is scoped for rel() function only. */

//******************* */
/* var browser = "Chrome"
var browser = "Firefox"
console.log(browser) // Re-dclaration is allowed in 'var'
browser = 'Edge'
console.log(browser) // Re-Initialisation is also allowed for 'var' */

/* var b
console.log(b) // Since it is just declared and not initialised, it gives 'undefined' value to it */

//Problem/issues with 'var'
/* var lp = 'Hey, Abi is here'
var op = 4
if(op > 2){
    var lp = "Hey, I'm out" // Here once if cond is True, in the block the lp is re-declared & re-initialised.
}
console.log(lp) //For the above reason, as var is being overwritten, this 'var' is not used in modern JS  */

// 2. let  --> Cannot be re-declared , but can be re-initialised
//---------------------------------------------------------------------------------------
// scope of let : Block scoped --> {}

/* let m = "Abi here!"
let time = 4
if(time > 3){
    let msg = "Hey! it's 4"
    console.log(msg) // This will be Printed successfully
}
console.log(msg) // This gives error - 'ReferenceError: msg is not defined'. Since, let msg is block {} scoped 
console.log(m) // This will Print successfully, since it is Globally declared & not used in any blocks */


/* let len = 4
//let len = 5 // This gives error, as 'let' wont allows re-declaration. Two let's not allowed
len = 10 // We can update/re-assign value to let varaible */

// 3. const --> Cannot re-decalred & re-inititalised ---> This const is nothing but 'final' keyword in java
//-------------------------------------------------------------------------------------
// const variables must be decalred & assign values during initialisation. Otherwise, throws error in the begining
/* const ms = "Hey! Tom"
//const ms = "Abi" //Error - cannot re-declare a const variable
//ms = "Hey! Pop" //TypeError: Assignment to constant variable.
console.log(ms) 
const noDays = 7
console.log(100 * noDays) */






