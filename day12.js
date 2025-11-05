/*
forEach() 
**** ===> map , filter , reduce , find -> These all accepts a callback function

*/

//forEach() --> passing 3 parameters
// Let's see how to implement if we pass 3 parameters to forEach()
//----------------------------------------------------------------
//In the below, the three parameters passed are a,b,c. We can pass only two parameters, depending on the requirement.
// a - denoted the element in each iteration
// b - denotes the index position of a
// c - denotes the entire array -  [105,456,321,-234,-65,345,-21]

//const tx = [105,456,321,-234,-65,345,-21,1000,-501,499]
/* let credit = []
let debit = []
tx.forEach((a,b,c)=> {
    if(a > 0){
        credit.push(a)
        console.log(`${a} is credited to the account & it's index position is ${b}. Original array is : ${c}`)
    } else {
        debit.push(a)
        console.log(`${a} is debited from the account & it's index position is ${b}. Original array is : ${c}`)
    }
})
console.log(`Credit Transactions are : ${credit}`)
console.log(`Debit Transactions are : ${debit}`) */



//---------------------------------------------------------------------------------------------------------------------
// ----------------- MAP ----------------------------------------------------------------------------------------------
// - Map is same like array, but only difference is , it returns an array
// - // This map() is also a call-back function, which accepts 3 parameters ( value,indexpos,original array)


/* //Below are few examples of using map
const num = [1,2,3,4,5]
//const mul = num.map((val) => {return val*2})
const mul = num.map((val) => val*2) // If it is a single statement, no need to give return stmt
console.log(mul)

const n1 = [10,15,20,25,30,35,40]
const multiplesOf2 = n1.map((e) => {
    if(e % 2 == 0){
        return e
    } 
})
console.log(multiplesOf2)

//for the same transaction eexample above, forEach doesn't return any values, whereas MAP returns an array[].
const tx = [105,456,321,-234,-65,345,-21,1000,-501,499]
let credit = []
let debit = []
const map1 = tx.map((a,b,c)=> { //Here, the return value is an array[] which is stored in map1
    if(a > 0){
        credit.push(a)
        console.log(`${a} is credited to the account & it's index position is ${b}. Original array is : ${c}`)
        return a
    } else {
        debit.push(a)
        console.log(`${a} is debited from the account & it's index position is ${b}. Original array is : ${c}`)
        return a
    }
})
console.log(`Credit Transactions are : ${credit}`)
console.log(`Debit Transactions are : ${debit}`) 
console.log(map1) */

//------------------------------------------------------------------------------------------------------------------------
//------------------ FILTER ----------------------------------------------------------------------------------------------

// This method filters out from original array[] and returns an array[]
// This filter() is also a call-back function, which accepts 3 parameters ( value,indexpos,original array)

/* const tx = [105,456,321,-234,-65,345,-21,1000,-501,499]

const filteredPositiveNums = tx.filter((val) => { if(val > 0) { return val}})
console.log(filteredPositiveNums)
const filteredNegativeNums = tx.filter((val) => { if(val < 0) { return val}})
console.log(filteredNegativeNums) */

//To use smiley's in mac, click fn key at left bottom
/* const faceSmileys = ["😂" , "☺️" , "😁" , "😭" , "😂" , "😴" , "😂"]
const smileys = faceSmileys.filter((sm) => { if(sm === "😂") { return sm }})
console.log(smileys) */

// Practise Example : Sum up all the nums in an array[] & print as a single sum value(not an array)
/* const values = [105,456,321,-234,-65,345,-21,1000,-501,499]
let sum =0
values.forEach((e) => {
    sum = sum + e
})
console.log(`Sum : ${sum}`) */
//In the above scenario, we need to use 3rd variable to get the sum of elements in an array[]
//I fwe don't want 3rd variable, below is the solution

//----------------------------------------------------------------------------------------------------------------------
//-------------------------REDUCE---------------------------------------------------------------------------------------
// reduce() accepts 4 parameters -> prev No , curr No, Index of curr val, original arr[]
// reduce() returns a number
// reduce() runs len-1 times. 
// The 0th index becomes prevVal & 1st index becomes currVal.
// Outside call-back func, it accepts 1 initial value to return as final value


/* const values = [1,2,3,4,5]
const sum = values.reduce((pv,cv,ci,arr) => {
    console.log(`PV is : ${pv}, CV is : ${cv}, CI is : ${ci}, Original Array is : ${arr}`)
    //return pv += cv
    return pv *= cv
}) 
console.log(sum) */

// Using 5th parameter in reduce() -> which comes after the callback function
/* const val = [1,2,3,4,5]
const sum = val.reduce((pv,cv) => { 
    return pv + cv
    
},0) // 0 is the 5th parameter where we are initialising to add up the sum to
console.log(sum) */


/* const val1 = [1,2,3,4,5]
const mul = val1.reduce((pv,cv) => { 
    return pv * cv
    
},1)
console.log(mul) */










