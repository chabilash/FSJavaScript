/*
Recap of reduce()

sort()
*/

// reduce()

/* const txn = [90 , -10 , 200 , -50 , 110]

const bal = txn.reduce(
    (pv , cv , index , arr) => {
        console.log(`PV is ${pv} , CV is ${cv} , Index is ${index} & Array is ${arr}`)
        let sum = pv + cv
        return sum
    }
)
console.log(bal)
console.log("******************************************************************************")
const bal1 = txn.reduce(
    (pv , cv , index , arr) => {
        console.log(`PV is ${pv} , CV is ${cv} , Index is ${index} & Array is ${arr}`)
        let sum = pv + cv
        return sum
    } , 0
)
console.log(bal1) */

/*
// Practise Use case : Pick all the middle names from below
//----------------------------------------------------------------------------------------------------------------------------------------

const custNames = ["Akhil Kumar Jain", "Abilash Reddy", "Shailesh Kumar Singh", "Ashish Khan", "Ajay Kumar Chaudhary"]

//Below , let's use map() & filter() as a method chaining
const middleNamesMap = custNames.map( // map() finds values having middlenames & gives undefined to others which don't have middle
    (val) => {
        if (val.split(" ").length ===3){
                return val
        }

    }
).filter( // filter() here filter out's undefined & just gives val which have middlenames
    (val) => {
        if(val != undefined){
            return val
        }
    }
).reduce( // Since reduce() gives a number, we are trying to get the count of the array
    (pv , val) => {
        return pv+1
    } , 0
)
console.log(middleNamesMap) 

// In the above example, in a single prog we have chained the methods map() , filter() & reduce().

//*********************************************************************************************************************************/

/* // Lets use only filter() directly to get the out put
const middleNamesFilter = custNames.filter(
    (val) => {
        if (val.split(" ").length ===3){
                return val
        }
    }
)
console.log(middleNamesFilter) 
console.log(middleNamesFilter.length) */


//--------------------------------------------------------------------------------------------------------------------------------------

//*********************************************.   SORT()  ********************************/
//sort() mutates the original array
//For strings, it goes ascending order A-Z


/* const custNames = ["Praveen Kumar Jain", "Abilash Reddy", "Shailesh Kumar Singh", "Kashish Khan", "Vijay Kumar Chaudhary"]
custNames.sort() // It sorts the first letters of each elements in array
console.log(custNames) 
custNames.sort().reverse() //To reverse the order
console.log(custNames)  */


const nums = [9,3,7,1,5,2,6,4,8]

/* nums.sort()
console.log(nums)
nums.sort().reverse()
console.log(nums) */

//Let's try to print in reverse order after sorting(by default sort() gives ascending order)
/* const custNames = ["Praveen Kumar Jain", "Abilash Reddy", "Shailesh Kumar Singh", "Kashish Khan", "Vijay Kumar Chaudhary", "Anil Bose"]
custNames.sort(
    (a,b) => { // a is current val & b is prev val
        if(a>=b) {
            return -1
        } else {
            return 1
        }
    }
)
console.log(custNames) */
/* 
const txns = [3,-1,83,57,199,123,66]
txns.sort() // Here it picks the 1st digit of each number & compares & gives the output
console.log(txns) */

//So, to get the actual Ascending / Descending order below Logic has to be used.
/* const tx = [3,-1,83,57,199,123,66]
tx.sort(
    (a,b) => {
        if(a>=b){
            return -1
        } else
            return 1
    }
)
console.log(tx) */

//For numbers, we can also give directly like below:
const arr = [49,3,-1,83,57,199,123,66]
arr.sort((a,b) => a-b) // a-b gives ascending order & b-a gives descending order
console.log(arr)



