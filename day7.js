// Day-7 

//We can pass one function as a argument to another function

//This below function will accept 2 variables and performs +,-,*,/


//Higher Order Functions
//a). Assign a function to a variable
/* const result = function calc(a,b){
    return a+b // here, the value returned will be assigned to const result
} 
console.log(`The result is ${result}`) */

//--------------------------------------------------------------------------------------------------
//b). You can pass one function as argument to another function
/* function calculate(a,b,c,fn){
    return fn(a,b,c)
}
 function sum(a,b){ //We can write this function in different way as below
    return a+b
} 
function sum(a,b,c){
    return a+b+c
}
 const sum = (a,b) => { //This is another way of writing function for above, without giving function name
    return a+b
} 

const sumResult = calculate(10,5,2,sum)
console.log(`The result is : ${sumResult}`)

function minus(a,b){
    return a-b
}

function multiply(a,b){
    return a*b
} */

//const mulResult = calculate(5,5,multiply)
//console.log(`The result is : ${mulResult}`)

// Practise of passing one function as argument to another function
/* function mul(a,b,fn){
    return fn(a,b)
}

function multiply(a,b){
    return a*b
}
const res = calculate(3,4,multiply)
console.log(`The result is : ${res}`) */

//--------------------------------------------------------------------------------------------------
//c)We can return one function from a function

/* function outputName(){
    //return true
    //return ["Abilash",5,12.4,false]
    return function sum(a,b){
        let c=  a+b
        console.log(`sum result is ${c}`)
    }
}
const result = outputName()
console.log(result)
console.log(`Output is : ${result}`) */

//In the above example, we awere returning function sum which is declared, but called anywhere in the program
//that's the reason, it will return whole sum function code to the result.

//Lets, try to pass some variables to a,b in sum & see
/* function outputName(a,b){
    function sum(a,b){
        let c = a+b
        console.log(`sum output is : ${c}`) //Prints: sum result is : 5
    }
    return sum(a,b)
}
const result = outputName(2,3)
console.log(result)
console.log(`Output is : ${result}`) // Prints : output is undefined, because nothing is being returned from sum function
 */

// Lets now, pass some value from sum function & see
/* function outputName(a,b){
    function sum(a,b){
        let c = a+b
        console.log(`sum output is : ${c}`) //Prints: sum result is : 5
        return c
    }
    return sum(a,b)
}
const result = outputName(2,3)
console.log(result) // Prints : 5
console.log(`Output is : ${result}`)  // Prints : Output is : 5
 */

//Now, lets call the returned in separate way 
function outputName(){
    return function sum(a,b){
        return a+b
    }
}
const result = outputName() // Here result gets the whole returned function sum
//so, lets call this sum now
const res = result(2,3)
console.log(`Output is : ${result}`)
console.log(`Output is : ${res}`)


