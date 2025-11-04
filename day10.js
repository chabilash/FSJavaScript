/*
slice()
*/
const str = "Abilash Chintalacheruvula"
/*
console.log(str.slice(0,3)) // Prints from 0th index to 2nd index(3rd will be ignored)
console.log(str.slice(-5,-1)) //starting from -5th to -2 index
console.log(str.slice(-5,)) //Starting from -5th till the end
*/


/*
//split()
const s1 = "Abilash Ch is a QA Automation Engineer"
const s2 = s1.split(" ")
console.log(s2)
console.log(s2.length)
*/


/*
      ARRAYS --> Unlike strings, arrays are mutable & can be changed
             --> size of an array is not fixed, it'll grow as we add elements to it.
             --> arrays accepts any type of data types
             --> stores data via indexing process
             --> arrays have certain methods which mutate the array & which won't mutate the array
-------------------------------------
*/
/*
const arr = [0,1,2,3,4,5,6]
console.log(arr)
console.log(arr.length)
console.log(arr[0])
console.log(arr[10]) //Undefined - since its direct accessing, -ve indexes doesn't works
console.log(arr[-2]) //Undefined - since its direct accessing, -ve indexes doesn't works

//at() - Negative indexing works here
console.log(arr.at(5))
console.log(arr.at(-2))
*/

/*
const arr = ["Abi" , "Avi" , "Akhil" , "Akash" , "Amber" , "Apple"]

// slice()  --> slice(starting_Index , ending_index) --> Immutes the array(wont' change)
const arr1 = arr.slice(2,3) // slice() extracts the req. data from arr & returns new arr (nothing but creating a new array from original)
console.log(arr1)
console.log(arr) // Though slice applied on arr, it won't change the original arr

//splice() -->  removes req.elements from original array & returns new array
const arr2 = arr.splice(2,5) // This will extract req. elements & changes the original array
console.log(arr2)
console.log(arr) // Here, orignial array is changed due to splice()


const arr = ["Abi" , "Avi" , "Akhil" , "Akash" , "Amber" , "Apple"]
const arr1 = arr.splice(3) // It creates a new array from 3rd index till the end & returns the same
console.log(arr1)
console.log(arr)
*/

/*
//reverse() - It mutates the original array
const arr = [1,2,3,4,5,6]
console.log(arr.reverse())  // reverses the original array
console.log(arr) // reverse would mutates the original and now the original arr is reversed now.
*/




