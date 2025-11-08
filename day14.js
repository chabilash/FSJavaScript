/*
- few methods in Arrays:
    -find()
    -findIndex()
- Debuggung JS

*/

// find() --> accepts call-back function
//        --> returns an element/boolen value
//        --> call back function accepts 3 parameters - (val , index,original arr)
//        --> Once the required element is found using find(), then it returns the value & execution is stopped right away without traversing through other remaining elements


//Use case 1:  Search the above array & find the first matching element which contains Kumar
const custNames = ["Praveen Kumar Jain", "Abilash Reddy", "Shailesh Gowda", "Kashish Singh", "Vijay Kumar Chaudhary", "Anil Bose"]
const foundName = custNames.find((val , index , arr ) => {
    if(val.split(" ").includes("Singh")){ 
        console.log(`Name : ${val} & its index position is : ${index}`) //So, here 'Singh' is found in 2nd Index & then it stops going through other remaining elements
        return true
        
    } else {
        console.log(`Name : ${val} & its index position is : ${index}`)
    }
}).
console.log(`The first accurance of Kumar in the array is : ${foundName}`)

/***************************************************************************************************************************************** */

// Use case 2: Find the string containing 'Gowda' & slice it from Original array.
const custNames1 = ["Praveen Kumar Jain", "Abilash Reddy", "Shailesh Gowda", "Kashish Singh", "Vijay Kumar Chaudhary", "Anil Bose"]

const gowdaNameIndex = custNames1.findIndex((val,index,arr) => {
    if(val.split(" ").includes("Gowda")){
        console.log(`Name : ${val} & its index position is : ${index}`)
        return true
    } else {
        console.log(`Name : ${val} & its index position is : ${index}`)
    }
})
console.log("*******************************************************************")
console.log(custNames1)
custNames1.splice(gowdaNameIndex , 1) 
console.log(custNames1)


//***********************************       DEBUGGING       *************************************************************** */

/*
The 4 buttons are as below:

PLAY button - Continue from one break point to another break point




*/




