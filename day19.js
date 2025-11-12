/*
1. Modules
2. Common JS - export & import
3. ES Module - export & import 
*/


/* //Common JS
//---------
function login(){
    console.log("Login to Application!")
}

let fName = "Abilash"

//This is the way of exporting in Common JS module - To export 1 or more items
module.exports = {login , fName} */


// ES Modules - This is in use from 2016 to till date
//----------------------------------------------------

function login(){
    console.log("Login to Application!")
}

let fName = "Abilash"

export {login , fName} // This si simple eway to export wharever we want
//export default login; --> If we want to export only 1 item , we can usr this default







