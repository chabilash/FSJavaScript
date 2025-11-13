/*

*/

//ESModules import

//----------------------------------------------------------------------------------------------------------------------------
/* // The below one way of importing individually & use it directly
import { sal , login , marks} from "./day20.js";

console.log(sal)
login()
console.log(marks) */



//------------------------------------------------------------------------------------------------------------------------------
//How to import collectively into 1 object & use individually with the object
/* import * as obj from "./day20.js" // Here we are collecting all '*' as obj/any name & can use as below

console.log(obj)  // The below is the output for 'obj' here
// [Module: null prototype] {
//  login: [Function: login],
//  marks: [ 93, 84, 81 ],
//  sal: 1000
//}
console.log(obj.sal)
obj.login()
console.log(obj.marks) */

//-----------------------------------------------------------------------------------------------------------------------------
//Now, if we want to give alias names , then as below:
/* import { sal as mySal, login as myLogin, marks as myMarks} from "./day20.js";

console.log(mySal)
myLogin()
console.log(myMarks) */


//----------------------------------------------------------------------------------------------------------------------------

import {employee as emp} from "./day20.js"

console.log(emp)