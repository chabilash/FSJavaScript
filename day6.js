//Functions ----> 
//--------------------------------------------------------------------------
//1. While declaring a function in JS, No need to specify return data type , since JS does not support datatypes
//2.


//Basic Function Declaration:
//---------------------------
/* function sum(a,b){
    let c = a+b
    return c
}
const d = sum(3,5)
console.log(d) */

/* function sum(a,b){
    let c = a+b
    console.log(`Sum of ${a} and ${b} is ${c}`)
}
sum(2,3) */

// There are 2 types of creating functions :
// 1. Function Declaration --> function sum(a,b) {---} --> This is declaring a function & we are giving a name to that function
// 2. Function Expression ---> This is of 2 ways as below:
// 2.1  Anonymous Functions :
//       const sum = function (a,b) { ------- }



//2.1 Anonymous Function :
//---------------------------------------------
/* const sum = function sum4(a,b) {
    let c = a+b
    console.log(`Sum of ${a} and ${b} is ${c}`)
}
sum(2,3)
const sum1 = sum
sum1(4,5)
console.log(typeof sum)
console.log(typeof sum1) */

//We can create parameter-less functions like below:

/* function printName(){
    console.log("Abilash")
}
printName();
//--------------
const output = function (){
    console.log("Abi!!!")
}
output() */

//2.2 Arrow Functions --> const q = (a,b) => {     } - This is also called as Special form of Anonymous Function
//---------------------------------------------------------------------------------------------------------------

//Ex 1.
/* const sum = (a,b) => {
    let c = a+b
    return c
}
console.log(sum(2,3))

//Ex 2.
const q = () => { 
    console.log("Abilash!!")
}
q()
//we can write the above in single line of code as below:
const w = () => console.log("Abi!!!")
w() //Abi!!!
console.log(w) //[Function w]
console.log(typeof w) // function */

//Ex 3.
/* const prNm = () => "Abilash"
prNm() //O/p is Nothing --> Becoz we are just calling the function, but not printing anything
console.log(prNm()) //O/p is Abilash --> In single line of code in the body of Array Functions, no need to give return ketword & the value which come out directly gets assigns to the  reference const
console.log(prNm) //O/p : [Function prNm]
console.log(typeof prNm()) // O/p : function */





