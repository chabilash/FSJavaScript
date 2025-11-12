/*
Scope: - Script Scope ( single .js file)
       - Global Scope ( can be accessed in mutiple .js files)
       - function Scope ( scope is within the function only)
       - Block Scope ( { ... } ex: If-block , else-block, while-block etc)
       - Local Scope (Whetever we are currently working on , like - func , block etc) 

    -------------------------------------------------------------------------------------------------------------------------------------------------
    |       var                           |     let                                           |       const                                         |
    -------------------------------------------------------------------------------------------------------------------------------------------------
    |   Redeclaration allowed             | Redeclaration Not Allowed                         | Redeclaration Not Allowed                           |     
    |   Re-assignment allowed             | Re-Assignment Allowed                             | Re-Assignment NOT Allowed                           |
    |   Hoisting Allowed(gives Undefined) | Not Allowed Throws Error(TBZ - Temporal Dead Zone)| Not Allowed Throws Error(TBZ - Temporal Dead Zone)  |
    |   Used to Modify the Value          | Used to Modify the value                          | Not allowed to modify value                         |
    |   Both Global & Function Scoped     | Block Scoped Only                                 | Block Scoped Only                                   |       





*/

//----
/* var a = 10 // it's declared as a Global Scope
{
    console.log(a) //a can be accessed inside any function as it's Global scoped above
}
console.log(a) // It will print a value since it is Global scoped

//-- 
var b =5
{
    console.log(b) 
}
function f1() {
    console.log(b) // a prints its value, since it is Global Scoped
}
f1() */

// -- Let's see Function Scoped
/* function f2(){
    var d =3 // This is Function scoped & cannot be access outside this func f2()
    console.log(d)
}
//console.log(d) //ReferenceError: d is not defined
{
    console.log(d) //ReferenceError: d is not defined
} */


