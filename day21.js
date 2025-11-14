/*
Async vs Sync

*/
// JavaScript is a Single-threaded language & works in a Synchronous way

//Synchronous Operation :
//The below works in a synchronous way(Sequential way) one line by one line
/* let a = 10
console.log(`value of a is : ${a}`)
let b = 20
console.log(`value of b is : ${b}`)
let c = 30
console.log(`value of c is : ${c}`) */

// The above prints in a sync way - prints a , b ,c

//Async Operation:

let a = 10
console.log(`value of a is : ${a}`)
setTimeout(() => {console.log("Exuted this code after timeout")} , 5000) //We are making script to wait for 5sec

let b = 20
console.log(`value of b is : ${b}`)
let c = 30
console.log(`value of c is : ${c}`)

// In the above, it prints a , then b , then c & then 'Executed ...'. That means the function is called but waiting for 5sec to get the returned value.
// In the meantime, it jumped to the next line of code & executed.




/*

All Theaory Part written in Notes.  */


