/*
Arrays Methods:

search operations:
1.includes
2.indexOf
3.lastIndexOf

*/
/*
const a1 = [1,2,3,4,5]
const a2 = [99,97,95,93]
const a3 = [55,57,59,53]

const a4 = a2 +","+ a3
console.log(a4)
const a5 = a1.concat(a2,a3)
console.log(a5)
const a6 = a1.concat(a2,a3).slice(2,7) //since concat returns an array, slice can be operated on resulting arr. This is called Method Chaining
console.log(a6)

*/

//join()
/* const arr = ["Abi" , "Avi" , "Akhil" , "Akash" , "Amber" , "Apple"]
console.log(arr)
console.log(arr.join()) // gives aeperated by comma
console.log(arr.join(" ")) // gives aeperated by a space
console.log(arr.join("/")) // gives aeperated by / 
const arr = ["Abi" , "Avi" , "Akhil" , "Akash" , "Amber" , "Apple"]
const a1 = arr.join()
console.log(a1)
console.log(typeof a1) */

// includes() , indexOf()
/* const arr = ["Abi" , "Avi" , "Akhil" , "Apple" , "Amber" , "Apple" , "Apple"]
console.log(arr.includes("Avinash")) //false
console.log(arr.indexOf("Apple"))
console.log(arr.indexOf("Abi" , 2)) //It searches "Abi" (Right to Left) starting from index 2 to the end & if not found, gives -1
console.log(arr.lastIndexOf("Apple")) // It searches &  last "Apple" is found at 6th index
console.log(arr.lastIndexOf("Apple" , 4)) // It searches from 4th index in Right to Left direction. From 4th to left it found Apple at 3rd position */


// push() --> adds at end of array , pop() --> deletes the last/ending item
// Both push() & pop() mutates/changes the original array
//const arr = ["Abi" , "Avi" , "Akhil" , "Akash" , "Amber" , "Apple"]
/* const a1 = arr.pop()
console.log(a1) // last item is Apple
console.log(arr) // prints by deleting Apple from the array */

/* const len = arr.push("Amcad") //Adds Amcad to arr and increases the original length of arr
console.log(arr)
console.log(len) */


// shift() & Unshift() --> adds and removes elements at the begining
/* const arr = ["Abi" , "Avi" , "Akhil" , "Akash" , "Amber" , "Apple"]
 const rem = arr.shift() //removes 'Abi' and assigns to rem
console.log(rem)
console.log(arr) // Prints arr without 'Abi' 

console.log(arr.unshift("Abi")) */

//-----------------------------------------------------------------------------------------------------------------------------

// for each -----> 
//-----------------

//const txns = [105,456,321,-234,-65,345,-21] 
/* txns.forEach(element => {
    if(element > 0){
        console.log(`${element} is credited to the account`)
    } else {
        console.log(`${element} is debited from the account`)
    }    
});
console.log("------------------------------------------------------------------------------------------")
for(const amt of txns) {
    if(amt > 0){
        console.log(`${amt} is credited to the account`)
    } else {
        console.log(`${amt} is debited from the account`)
    } 
} */

// We are passing only 1 input to forEach()
/* txns.forEach(ele => {
    if(ele > 0){
        console.log(`${ele} is credited to the account`)
    } else {
        console.log(`${ele} is debited from the account`)
    }
}) */

// Let's see how to implement if we pass 3 parameters to forEach()
//----------------------------------------------------------------
const tx = [105,456,321,-234,-65,345,-21] 
//In the below, the three parameters passed are a,b,c. We can pass only two parameters, depending on the requirement.
// a - denoted the element in each iteration
// b - denotes the index position of a
// c - denotes the entire array -  [105,456,321,-234,-65,345,-21]
tx.forEach((a,b,c)=> {
    if(a > 0){
        console.log(`${a} is credited to the account & it's index position is ${b}. Original array is : ${c}`)
    } else {
        console.log(`${a} is debited from the account & it's index position is ${b}. Original array is : ${c}`)
    }
})



//Imp Points:
//--------------
// 1. Both for-of or forEach() doesn't return any value. Both are void.
// 2. In for-of , it allows us to use break & continue statements. Bit, forEach() doesn't allows break & continue.




