//Comparison Operators : > , < , >= , <= , ! , & , |

/* let n1 = 5
let n2 = 7
let isGreater = n1 > n2 // < , > , <= , >=
console.log(isGreater)
console.log(typeof isGreater) */


// Logical Operators. --> == , && , |
/* let gender = 'M'
let age = 20
if(gender == 'M' && age ==19 ){ // &&(AND) or ||(OR)
    console.log("Teenage Boy")
} else {
    console.log("Unknown")
} */

/* let valid = 5>7
console.log(valid) // gives False
console.log(!valid) // gives True
 */

// Equality Operations. ---> = (assignment), == (loose) , === (strict)
// = (assignment)
/* let a = 5 // assignment
let b = 5
// == (loose)
if( a == b){
    console.log("Confirm!!")
} */

// ===  (strict comparison)
/* let a = 75
let b = "75" */

/*if( a == b){
    console.log("Equal") // This gives Equal though comparing with number & string. JS internally converts a number to string
} else {                 // So, JS converts a=75 to "75" & compares with b="75". That's why it gives Equal
    console.log("Not Equal")
} */

/* if( a === b){
    console.log("Equal") // Here, a=75 is not converted to "75"  , strictly it compares 75 with "75" and gives not equal 
} else {                 
    console.log("Not Equal")
} */

// STRINGS 
//-----------------------------------------------------------------------------

/* let fn = "Abilash"
let ln = "Chintalacheruvula"
let age = 30
let city = "Tampa"

console.log(fn +" "+ ln) // This way we declare in Java
console.log(fn , ln) // JS works this also

/* let myProfessoin = "I'm an QA Automation engineer and \n\
                    I worked for multiple Multi-National \n\
                    Companies \n\
                    " */   // This is the way we write long string in Java

//Template String  --> ` ` - Use back tick
/*let myProfessoin = `I'm an QA Automation engineer and 
                    I worked for multiple Multi-National 
                    Companies`

let myBio = `My name is : ${fn} ${ln} & my age is : ${age} & live in ${city} and my Profession is - ${myProfessoin}`
console.log(myBio) */

//DataTypes are of Two kinds :
//1. Primitive Datatypes : string,numbers,boolean,undefined,null
//2. Object : Arrays,objects,Functions,map,set

// Arrays :
//---------------------------------------------------------------------------------
// It can stores different types of datatypes
// It has NO boundary to store elements

let subjects = ["Maths" , "Physics" , "Chemistry"]
let names = ["Abilash" , "Ch" , 30 , "Tampa" , 33782.2 , true , subjects] //Array in a Array is accepted
names[8] = "FL"
//console.log(names)
/*console.log(names[7])
console.log(names[6][1]) // Two-Dimensional Array */

console.log(names.length)









