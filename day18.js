/*
Closures - recap

Closure : It is a function bundles in Lexical Scope. Lexical Scope is the memory area of entire Hierarchy.



*/

// Closure :
/* var b = 30
function f1() {
    var a = 20
    function f2(){
        console.log(a)
        console.log(b)
    }
    f2()
}
f1() */


//Another scenario on Closures:

var b = 30
function f1() {
    var a = 20
    function f2(){
        console.log(a)
        console.log(b)
    }
    return f2
}
var c = f1()
c()

