/*
Call-stack , Memory Area , Hoisting in var & let


*/

//Hoisting in var & let

console.log(x) // 'var' gives undefined , when we call it even before declaration
console.log(y) // But, unlike 'var' , 'let' gives 'ReferenceError: Cannot access 'y' before initialization'
console.log(z) // same like 'let' , 'const' gives the same 'ReferenceError: Cannot access 'z' before initialization'

var x = 9
let y = 10
const z = 11

// The above behaviour is called as Hoisting. 
// Hoisting is the behavior where you are able to use the variable before even declaring it.
// -----------------------------------------------------------------------------------------



// Temporal Dead Zone : Time taken for a variable in memory of GEC as undefined to the value being assigned to it.