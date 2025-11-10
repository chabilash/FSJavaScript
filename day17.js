/*
Lexical Environment , Lexical Scope , Scope Chain & Closures
------------------------------------------------------------


*/

//***********************************       HOISTING for functions(). ***************************************** 
//----------------------------------------
/* console.log(a) // Gives undefined as Hoisting is possible for 'var' variables
var a =90 */

//----------------------------------------
/* console.log(b) 
let b =91 */
//Here for let , Hoisting is possible , but of no use. Fri only let variables, 
// Temporal Dead Zone is the time interval between 'undefined' T0 & actual value (91) T1. 
// During this time period , this let variable 'b' is in dead phase and of no use.


//----------------------------------------
/* console.log(c) // ReferenceError: Cannot access 'a' before initialization
const c = 92 */
// In this scenario for const, it means that Hoisting is not possible for const


/******************************** IMPORTANT NOTES / POINTS **********************************

************  HOISTING is nothing but Consuming the variable before actual declaration  ********************

// var : Hoisting is Possible , Undefined
// let : Hoisting is possible , but of NO Use due to "Temporal Dead Zone" (TDZ)
// const : Hoisting is not at all POSSIBLE for const, right awat denied.

*********************************************************************************************/

// Let's see the observation of Functions :
//------------------------------------------


// #1
// ----
/* function hello() {
    console.log("Hello World!!")
}

hello()  */// --> This will work normally

// #2 : Let's see others scenario:
// -------------------------------

/* hello1()  // ==> This hello1() function is neing called before its declaration. But, still it works like var ( unlike let / const )
function hello1() {
    console.log("Hello World!!")
} */

// In the above scenario , in the Execution context memory , it saves the function hello1() body part & in code execution part, when it calls at Line.47, 
// since the function's body part is already existing in the memory , it executes & prints hello.

// #3 : Another Scenario :
// -----------------------

/* var l1 = function() {
    console.log("Hello World!!")
}
l1()  */// It works normally & prints Hello World!!
// In the memory part of Execution Context, firstly it stores l1 : undefined since it is defined as var
// and then in Code execution phase, it assigns l1 : (with whole body part of function) & in next step l1() it executes normally

// How about in the below way for the above scenario.

/* l2()  
var l2  = function() {
    console.log("Hello World!!")
} */
// It gives l2 is not a function error becuase in the memory of Execution context , it prepares mem space for l2 : undefined since it is declared as var
// And then in code execution phase, it calls l2() & since l2 is undefined in memory , it gives l2 is not a function error

//Lets see the same scenario for let & const


/* l3()    // ReferenceError: Cannot access 'l3' before initialization
let l3  = function() {
    console.log("Hello World!!")
} */


/* l4()    // ReferenceError: Cannot access 'l4' before initialization
const l4 = function() {
    console.log("Hello World!!")
} */


// The same way , it works for Arrow functions

//****************************************************************************************************************************************
// 
 
// Closure :
/* var b = 30
function f1() {
    var a = 20
    function f2(){
        console.log(a)
        console.log(b)
    }
    f2()
}
f1() */


//Another scenario on Closures:

var b = 30
function f1() {
    var a = 20
    function f2(){
        console.log(a)
        console.log(b)
    }
    return f2
}
var c = f1()
c()




