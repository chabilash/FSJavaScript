/*
Assignment:
1. Assign a function to a variable
    1.a. By Function Declaration
    1.b. By Anonymous Function expression
    1.c. By Arrow Functions

2. Pass a function as an argument to another function
    2.a. By Function Declaration
    2.b. By Anonymous Function expression
    2.c. By Arrow Functions

3. Return a function from a function
    3.a. By Function Declaration
    3.b. By Anonymous Function expression
    3.c. By Arrow Functions
*/


//1.  ---------------------------------------------------------------------------------------------

//1.a. By Function declaration
/* const a = function sum(a,b) {
    return a+b
} 
const result = a(2,3)
console.log(`Output is : ${result}`) */

//1.b. By Anonymous function
/* const a = function (a,b) {
    return a+b
} 
const result = a(2,3)
console.log(`Output is : ${result}`) */

//1.c. By Arrow Functions
/* const a =  (a,b) => {
    return a+b
} 
const result = a(2,3)
console.log(`Output is : ${result}`) */

//2.  ----------------------------------------------------------------------------------------------

//2.a.By Function declaration
/* function calculate(a,b,fn){
    return fn(a,b)
}

function sum(a,b){
    return a+b
}

const result = calculate(2,3,sum)
console.log(`Output is : ${result}`) */

//2.b. By Anonymous function
/* function calculate(a,b,fn){
    return fn(a,b)
}

const sumVal = function(a,b) {
    return a+b
}

const result = calculate(2,3,sumVal)
console.log(`Output is : ${result}`) */

//2.c. By Arrow Functions
/* function calculate(a,b,fn){
    return fn(a,b)
}

const sumVal = (a,b) => {
    return a+b
}

const result = calculate(2,3,sumVal)
console.log(`Output is : ${result}`) */

//3. -----------------------------------------------------------------------------------------------

//3.a. By Function declaration
/* function outputName(){
    return function sum(a,b){
        return a+b
    }
}
const result = outputName() // Here result gets the whole returned function sum
//so, lets call this sum now
const res = result(2,3)
console.log(`Output is : ${result}`)
console.log(`Output is : ${res}`) */

//3.b. By Anonymous function
/* function outputName(){
    return function (a,b){
        return a+b
    }
}
const result = outputName() // Here result gets the whole returned function sum
//so, lets call this sum now
const res = result(2,3)
console.log(`Output is : ${result}`)
console.log(`Output is : ${res}`) */

//3.c. By Arrow Functions
function outputName(){
    return (a,b) => {
        return a+b
    }
}
const result = outputName() // Here result gets the whole returned function sum
//so, lets call this sum now
const res = result(2,3)
console.log(`Output is : ${result}`)
console.log(`Output is : ${res}`)
