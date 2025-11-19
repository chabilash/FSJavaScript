/*
Classes
*/

//How to create classes
class Employee {
    //Instance variables declaration
    //class variables are static variable
    firstName
    lastName

    //to create constructor
    // constructor(){
    //     console.log("Constructor Initiated!!")
    // }

    //In JS, constructor overloading is not allowed.
    constructor(input){
        console.log(`Constructor initialized with ${input}`)
    }

    setFirstName(firstName){
        this.firstName = firstName
    }

    getFirstName(){
        return this.firstName
    }
    setLastName(lastName){
        this.lastName = this.lastName
    }

    getLastName(){
        return this.lastName
    }
    generateFullName(){
        //here, below fullName is local variable which has scope to this function only
        let fullName = `${this.firstName} ${this.lastName}`
        return fullName
    }
}

//How to create instance/object of a class
const abi = new Employee("Abilash") // --> creating object of the class
abi.setFirstName("Abilash")
console.log(abi.getFirstName())

const avi = new Employee()
console.log(avi.getFirstName()) // gives undefined , as nothing initialised for 'avi' object




