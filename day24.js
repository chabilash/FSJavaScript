/*
Promises  -  then() , catch()
*/

/*
// Using then()
//--------------
const url = "https://reqres.in/api/users?page=2"
console.log("Begin")
fetch(url).then(result => console.log(result))
console.log("End")
*/

//Using async await --
//----------------------

/* async function fetchingData(url) {
    console.log("Begin")
    //await fetch(url).then(result => console.log(result))
    const result   = await fetch(url)
    const resData  = await result.json();
    const item     = await resData.data[0].id
    console.log(item)
    console.log("End")
}

fetchingData("https://reqres.in/api/users?page=2") */


//-----------------------------------------------------------------------------------------------------------------------

// Creating our own new promise

//const url = "https://reqres.in/api/users?page=2"

/* const pr = new Promise((resolve , reject) => {
    resolve()
    reject()

}) */



//-------------------------------------------------------------------------------------------------------------------------

// then() , catch() , finally()

// const url = "https://reqres.in/api/users?page=2"

// Example of using then , catch , finally
/* fetch(url)
.then((res) => {console.log(res)}) // When the Promise in fetch() is fullfilled , it goes to then()
.catch((res) => {console.log(res)}) // When the Promise in fetch() is unfullfilled , it goes to catch()
.finally(() => {console.log("Operation Completed!!!")}) // Either it goes to then()/catch() , it makes sure finally() runs always.

 */
// Another Example of using then , catch , finally

/* const url = "https://reqres.in/api/users?page=2"

const getId = async function () {
    const result   = await fetch(url)
    const resData  = await result.json();
    return new Promise((resolved , rejected) => {
                if(resData.data[0].id === 7 ){
                    setTimeout(() => { resolved("Hurray! Id is found!!!")},1000)
                } else {
                    setTimeout(() => { rejected("Ooops! Id is not found!!!")},1000)
                }
    })
}
await getId()
.then((res) => {console.log(`Promise got Resolved : ${res}`)})
.catch((res) => {console.log(`Promise got Rejected : ${res}`)})
.finally(() => {console.log("Finally Execution Completed!!")}) */


//-------------------------------------------------------------------------------------------------------------------------------
/*
//Destructuring ---> Arrays & Objects

const names = ["Abi" , "Avi" , "Anoosh" , "Akhil"]

//To retrieve inviidual items from the above Array
//const a = names[0]

//Using Destructuring :
const [a,b,c,d] = names
//console.log(b)

const [u,v,w,x,y,z] = names
//console.log(z) // Will get undefined , as there are only items in array & will be assigned to first 4 values

// For Objects:

const emp = {
    name : "Abilash",
    age : 35,
    gender : "M",
    address : {
        houseNo : 9898,
        streetName : "Napier Valley",
        city : "Tampa",
        state : "Florida",
        zip : 33510
    }

}
//const {name , address} = emp // By just giving the 'key' field , we can extract from an object
//console.log(address)

// Example Use case for the above Object destructuring
function f1({name,address,nationality}) {
    console.log(name)
    console.log(address)
    console.log(nationality) // gives undefined since there is no {key,value} present in the object
}
f1(emp) // though we are passing whole 'emp' object to function , it is picking up only the key names which are given in parameter section of f1()
*/

//---------------------------------------------------------------------------------------------------------------------------------------

// Spread Operator - '...' works in both Arrays & Objects (this '...' disintegrates arrays/objects)

//Arrays usecase
/* const num1 = [1,2,3,4]
const num2 = [5,6,7,8]
const num3 = [num1 , num2]
console.log(num3) // we get an array of array's like -  [ 1, 2, 3, 4 ], [ 5, 6, 7, 8 ] ]

const num4 = [...num1 , ...num2] // this '...' makes it as an individual items , not an array anymore
console.log(num4) // Now, we get the output as : [1, 2, 3, 4, 5, 6, 7, 8]
 */
//Objects usecase
/* const employee1 = {
    name : "Abilash",
    age : 35,
    gender : "M",
    address : {
        houseNo : 9898,
        streetName : "Napier Valley",
        city : "Tampa",
        state : "Florida",
        zip : 33510
    }

}
const empDetails = {
    ...employee1,
    bankName : "CHASE Bank",
    accType : "Checking Account",
    companyName : "JP Morgan Chase"
}

console.log(empDetails) // This will give all the fields as individuals
 */
