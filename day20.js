/*
1. ESModule export-import. - recap

2. Object
*/

//ESModules Export - This is recommended for export-import
// two types of Exports
//      - Default export - we can export only 1 item ( only 1 variable or 1 function only)
//      - Named Export

/* 
let sal = 1000
const login = function() {
    console.log("I'm logged in")
}
const marks = [93,84,81]


export {sal , login , marks} // This is used to export multiple items
//export default sal // This is used when we export single item
 */


//---------------------------------------------------------------------------------------------------------------------------------
// *************************         OBJECT     ***********************************************************************************
// - 
// - Object's contains {key:value} pair.
// - An Object can also have another Object inside it.

/*
export  {employee} // exported to day20_1.js

const employee = {
                name : "Abilash",
                rollNo : 501,
                branch : "CSE",
                year : function(){
                    console.log("I'm in Final Year")
                },
                marks : [93,81,84]

            }

//console.log(typeof employee)  // It gives 'Object'.

// Two ways to access the keys from Object
//1. ObjectName["KeyName"]
console.log(employee["name"])
//2. ObjectName.KeyName
console.log(employee.marks) //directly we can access the keys

// marks is an array inside an Object. So, how to add new item inside marks
employee.marks.push(96)
console.log(employee.marks) 

// To call a function which is inside the employee Object
employee.year()

// Adding a new 'Key' to existing Object
employee.univ = "Hyderabad" // Directly adds new {key,value} 
console.log(employee)
//Adding {key : function} to existing Object
employee.result = function(){
    console.log("I'm Graduated!!")
}
console.log(employee)

// To update value for an existing key
employee.branch = "Computer Science Engineering"
console.log(employee)
// Adding a new pair with undefined as value
employee.category = undefined
console.log(employee)
employee.grade = null
console.log(employee)


// Let's see how an Object is inside an Object
// Below, VW is an Object & BMW is also an Object. So, VW is being added inside BMW Object
const VW = {
    country : "Germany",
    models : 55
}

const BMW = {
    model : "BMW X6",
    variant : "x30Drive",
    fuel : "Hybrid",
    cost : "$65000",
    parentCompany : VW

}
console.log(BMW)

// For above scenario (Object in an Object), we can direclty write like below:

const AUDI = {
    model : "AUDI Q7",
    variant : "x70D",
    fuel : "Hybrid",
    cost : "$70000",
    parentCompany : {
                        country : "Germany",
                        models : 55
                    }
}
console.log(AUDI) */


//----------------------------------------------------------------------------------------------------------------------

//Convert JS Object into json output

const AUDI = {
    model : "AUDI Q7",
    variant : "x70D",
    fuel : "Hybrid",
    cost : "$70000",
    bhp : undefined,
    parentCompany : {
                        country : "Germany",
                        models : 55
                    }
}


const audiJson = JSON.stringify(AUDI) // This is the json which converted javascript Object AUDI

console.log(AUDI)  // It's JavaScript Object which we created
console.log(audiJson) // This is Json which got converted. The problem with Json is that it wont accept undefined. that's why 'bhp' key wont be present

// The output for the above audiJson is as below:
//  {"model":"AUDI Q7","variant":"x70D","fuel":"Hybrid","cost":"$70000","parentCompany":{"country":"Germany","models":55}}


// Now, Let's try to convert the above Json to JavaScript Object :

const consertedJsonToJSObject = JSON.parse(`{"model":"AUDI Q7","variant":"x70D","fuel":"Hybrid","cost":"$70000","parentCompany":{"country":"Germany","models":55}}`)

console.log(consertedJsonToJSObject)





















