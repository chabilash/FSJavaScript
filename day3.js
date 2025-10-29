/* There are Four ways to decalre a variable
   -----------------------------------------
fName = 'Abi' --> Without giving any var,let,const
var lName = 'Ch' --> Using var
let flName = 'Chabi' --> By using let
const lfName = 'AbiCh' --> by using const 

****** direct declaration & var are legacy ways of declaring variable
****** So, mostly in JS , only let and const are used widely.                 */


/* -------------------------------------------------------------------------- */
/* fName = 'Abilash'
console.log(fName) -->Though No Datatype like let,var,const , still it works*/

/* fName
console.log(fName) --> This will give fName not defined */

/* fName = null
console.log(fName) --> null will be printed */

/* Undefined vs NOT Defined */
/*--------------------------*/

/* f = undefined
console.log(f) // This gives undefined
console.log(typeof f) //This also gives undefined

let fn
console.log(fn) // As we declared & didn't initialise any value, This gives undefined
console.log(typeof fn) //This also gives undefined

console.log(ln) // This gives error as 'ln is not defined' , as we didn't declare the ln variable */


/* LET Variable*/
/*-------------*/

/* let n =2
let n1 = 9
let n2 = 5
let n3 = n1+n2
let n4 = n1/n2
let n5 = n1 * n2
console.log(n3 , n4 , n5) */

/* Datatype Conversion :  nums->String->boolean & vice versa [Coercion]  */
/* Coercion is nothing but automatic conversion of datatypes */
/*-----------------------------------------------------------*/

/* Number -> String */
/* let age = 40
let stringAge1 = String(age)
console.log(stringAge1)
console.log(typeof stringAge1) // It gives String

stringAge1 += 1 // as it is string , 1 will be added to string and gives 401 as output
console.log(stringAge1)
console.log(typeof stringAge1)
 */


/* String to Number */
/* let amt = "100"
let total = Number(amt)
console.log(total)
console.log(typeof total)

let n = 'Abi'
let n1 = Number(n)
console.log(n1) // This gives output as  NaN (Not-a-Number)
console.log(typeof n1) // It's type is Number, but gives NaN as above */

/* Coercion to Boolean */

/* let m = true
let m1 = String(m)

console.log(m1) //String
console.log(typeof m1) //String

let m2 = Number(m)
console.log(m2) // 1 --> Since 1 is considered as true
console.log(typeof m2) // as the value is 1 , it gives Number */

/* let age = 25
console.log(Boolean(age)) // gives True

let age1 = 0
console.log(Boolean(age1)) // Gives False

let age2 = NaN
console.log(Boolean(age2)) // Gives False

let age3 = -1
console.log(Boolean(age3)) // gives True, since it's a some number though it is negative number */

/* In the above numbers to Boolean coercion, Only 0 & NaN gives FALSE & remaining all gives TRUE */

/* let bn = "Abilash"
console.log(Boolean(bn))

let fname = ""
console.log(Boolean(fname)) // gives false, since it is empty

let f2
console.log(Boolean(f2)) */






















