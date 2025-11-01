// If-else , swtch , loops

//If-else
//------------------------------------------------------------
//let age = 55
/* if(age > 0 && age <= 18 ){
    console.log("Teen!!")
} else {
    console.log("Adult!!")
} */
//----------------------------

/* if(age > 0 && age <= 18 ){
    console.log("Teen!!")
} else if(age > 18 && age <= 45) {
    console.log("Adult!!")
} else if(age >45 && age <= 60){
    console.log("Adult Phase-2!!")

} else if(age > 60){

    console.log("Senior Citizen!!")
} else {
    console.log("Invalid age")
} */

//Switch :
//--------------------------------------------------------------
/* let day = "Z"
switch(day){
    default:
        console.log("It's not a day in a week!!")
        break
    case "Mo":
        console.log("It's Monday!")
        break
    case "Tu":
        console.log("It's Tuesday!")
        break
    case "We":
        console.log("It's We")
        break
    case "Th":
        console.log("It's Thursday!")
        break
    case "Fr":
        console.log("It's Friday!")
        break
    case "Sa":
        console.log("It's Saturday!")
        break
    case "Su":
        console.log("It's Sunday!")
        break
    
} */

//Ternary Operator --> It works only with if-else condition
//-----------------------------------------------------------
/* let age = 30

age <=18 ? console.log("Teen!!") : console.log("Adult!!") */


//Looping Statements:
//------------------------------------------------------------

//For Loop:
/* for(let i=1;i<=5;i++){
    console.log("Hey JS!!")
} */

//While Loop:
/* let a = 5
while (a>0) {
    console.log("Hello JS!!")
    a--
} */


/////// In JS, There are 3-types for For-loops
//-------------------------------------------------------------
//1. Classic for-loop --> for(let i=0;i<5;i++) {   }
//2. for-of Loop --> for(const a of arr) {    } --> This only works for iteratable things
//3. for-in loop --> for(const a in obj) {    } --> 


//1. Classic For Loop(Regular default For Loop) :
//---------------------------------------------------------------
/* let a = [1,2,3,4,5]
for(let i=0;i<a.length;i++){
    console.log(a[i])
} */

//2. For-of Loop:
//--------------------------------------------------------------
let marks = [93,84,81,79,67,88]
for(const i of marks){ //Instead of index, i takes the actual value in that position
    console.log(i)
}

//3. For-in Loop:
//--------------------------------------------------------------







