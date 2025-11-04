/*
STRINGS & its METHODS
---------------------
*/

//Below are 4 different ways to declare & assign to a string
/*
const myName = `Abilash`
const myName1 = 'Abilash'
const myName2 = "Abilash"
const myName3 = new String("Abilash") */

/*
const myName = `Abilash`
//length - it's a property
console.log(myName.length)

//at() - method - Introduced in 2022
console.log(myName.at(0))
//charAt() - method - available from Older versions 
console.log(myName.charAt(5))

console.log(`output is : ${myName.at(100)}`) // gives Undefined as the length is just 7
console.log(`output is : ${myName.charAt(100)}`) // gives empty , better to use above 'at' method

console.log(`output is : ${myName.at(-1)}`)  // gives the last char of the string.
console.log(`output is : ${myName.charAt(-1)}`)
*/

/*
const myName = `Abilash`
// Both the below methods gives same output, but chatCodeAt uses UTF-8 , but charPointAt uses UTF-16
// UTF-8 : 0-65000
//UTF-16 : 0-1.14lac
console.log(`output is : ${myName.charCodeAt(0)}`) // gives 65, which is ASCII value of 'A'
console.log(`output is : ${myName.codePointAt(0)}`) // gives 65, which is ASCII value of 'A'
*/
/*
const myName = `❤️bilash`
console.log(`output is : ${myName.charCodeAt(0)}`) // gives 65, which is ASCII value of 'A'
console.log(`output is : ${myName.codePointAt(0)}`) // gives 65, which is ASCII value of 'A'
*/

/*
//Concatenation
const fName = `Abilash`
const lName = `Ch`
const fullName = fName + lName
console.log(fullName)
console.log(fName.concat(lName))
console.log(fName) // gives `Abilash' only though concatenated, as strings are Immutable

let names = ['Abi' , 'Avi' , 'Ashish']
console.log(fName.concat(names))
*/

/*
//Searching Operations: 
// endsWith() - checks only the last one in the string 
// startsWith() -  checks only at the start of the string 
// includes() - it checks the whole string


const myName = `Abilash`
let names = ['Abi' , 'Avi' , 'Ashish']
console.log(myName.includes('h')) //true
console.log(names.includes("Abi")) //true
*/

/*
//indexOf()  --> searches from Left -----> Right
//lastIndexOf() ---> searches from Right ---> Left
const myName = `Abilash`
let names = ['Abi' , 'Avi' , 'Ashish']
const str = "Im Abi & Im QA Engineer & Im working in Tampa."
console.log(`output is : ${str.indexOf('Im')}`) // gives 0 , as it gives us the first occurence from the str
console.log(`output is : ${str.lastIndexOf('Im')}`) // gives 26 , as it check the last occurence from the str
console.log(`output is : ${str.indexOf('Im',5)}`) // gives 9 which is the middle Im. becoz we gave 5, where is starts searching from 5th index & ignoring first 4 indexes.
console.log(`output is : ${str.lastIndexOf('Im',22)}`) // gives 9 & ignores 22 indexes from right & then starts searching to find first occurence of Im
*/



/*
trim() --> Trims spaces at both ends
trimStart() --> Trims only the starting spaces
trimEnd() --> trims only the end spaces

const fName = `    Abilash    `
const lName = `Ch`
console.log(fName.toUpperCase())
console.log(lName.toLowerCase())
console.log(fName.trim().concat(lName)) // It Trims both ends spaces & concats lName to it
console.log(fName.trimStart().concat(lName))
console.log(fName.trimEnd().concat(lName))
//repeat() --> repeats the string no of times
console.log(lName.repeat(10)) //It prints 10 times
*/


/*
update Operation :
replace()
replaceAll()

const str = "Im Abi & Abi is a QA Engineer & Abi is working in Tampa." 
console.log(str.replace("Abi" , "BMW X5")) // It replaces only the first appearance of Abi
console.log(str.replaceAll("Abi" , "VOLVO XC90"))
*/

/*
slice()
split()
substring()

*/
const str = "Im Abi & Abi is a QA Engineer & Abi is working in Tampa." 
const str1 = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
console.log(str.substring(9)) //starting from 9th Index, it prints till the end.
console.log(str.substring(9,20)) //starting from 9th Index, prints till 19th Index(since 20th is not included)
console.log(str1.substring(3,-1))
//console.log(str1.substring(5,-3))