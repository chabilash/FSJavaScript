/*
---------------------- MEMORY MANAGEMENT -------------------------------------

--> There are 2 types of Memory
        - Stack Memory

        - Heap Memory -> Used to store Objects
                      -> Objects in JS are functions(), arrays , StringObj's  

*/



const guestList = ["AB" , "BC" , "CD"]
console.log(`Pre : ${guestList}`)
guestList.push("DE") // Here, though const is immutable , but guestList accepts the push method and add's new item into the array which is in Heap memory
console.log(`Post : ${guestList}`) 

/* This is what happens when the above guestList is declared and assigned.
        STACK MEMORY                                                                HEAP  MEMORY
    ADDRESS | Variable Name | value                                                 ADDRESS  | value
    -------------------------------                                                 -----------------
      0001  |  guestList    |  H001                                                 H001     | ["AB","BC","CD"]

 When the push("DE") is done, then the value in the Heap memory will be just updated & nothing else will change. 
 As the address reference is not changing & just the value at the Heap memory changes, it is abiding to the concept of const. 

      0001  |   guestList   |   H001                                                H001     | ["AB","BC","CD","DE"]

*/


