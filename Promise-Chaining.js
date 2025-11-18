/*
Promise - then() , catch()
*/

/* const prm = new Promise(
    function executorFunc(resolve,reject){
        console.log("Water has started to boil")
        setTimeout(() => {
            console.log("Water has been boiled")
            resolve()
        },3000)
    }
)

prm
.then(() => {
    console.log("Promise Fulfilled")
})
.catch(() => {
    console.log("Promise Unfulfilled")
})
.finally(() => {
    console.log("Execution of Promise is Completed.")
})

setTimeout(() => {
    console.log("Macro Task Queue / Call Stack Queue")
},4000)
 */

//---------------------------------------------------------------------------------------------------------------------
// Promise Chaining
//-----------------

//Use case example : e-commerce site of searching product , select product , add to cart & then to Payment
// Assuming each step as 1,2,3,4 like below:



function step1(){
    return new Promise(
        (resolve,reject) => {
            console.log("Step1 started")
            setTimeout(() => {
                console.log("Step1 Successful!!")
                resolve()
            },4000)
        }
    )
}

function step2(){
    return new Promise(
        (resolve,reject) => {
            console.log("Step2 started")
            setTimeout(() => {
                console.log("Step2 Successful!!")
                resolve()
            },3000)
        }
    )
}

function step3(){
    return new Promise(
        (resolve,reject) => {
            console.log("Step3 started")
            setTimeout(() => {
                console.log("Step3 Successful!!")
                resolve()
            },2000)
        }
    )
}

function step4(){
    return new Promise(
        (resolve,reject) => {
            console.log("Step4 started")
            setTimeout(() => {
                console.log("Step4 Successful!!")
                resolve()
            },2000)
        }
    )
}

step1()
    .then(step2)
    .then(step3)
    .then(step4)
    .then(() => console.log("All Steps Successful!!!"))
    .catch(
        () => {console.log("Promise Failed!!!")}
    )
    .finally(() => {console.log("Finally, Execustion Finished!")})


// If in between, instead of resolve() , it execution calls reject() , it calls catch() directly & further function steps won't be executed.