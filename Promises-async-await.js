/*
Promises - async await
*/

// async-await is nothing but a promise, but a refined way & is user-friendly.


// Sample Use case by manually creating Promise:
/* function exmp(){
    return new Promise(
        (resolve,reject) => {
            setTimeout(() =>{
                console.log("Task Completed.")
                resolve()
            },3000)
        }
    )
}

exmp()
    .then(() => {console.log("Promise Resolved!")})
    .catch(() => {console.log("Promise Rejected!")})
 */



// Now, let's try the above same by using async await
//---------------------------------------------------

/* function exampleUseCase(){
    return new Promise(
        (resolve,reject) => {
            setTimeout(() =>{
                console.log("Task Completed.")
                resolve() // If reject() , the it directly calls catch() in the try-catch block
            },3000)
        }
    )
}

// async function run(){
//     await exampleUseCase()
//     console.log("Promise Fulfilled!!") // This is direct assumption that it calls resolve
// }

// run()

// If there is need to write for reject , then we can write try-catch as below:

async function run(){
    try{
        await exampleUseCase()
        console.log("Promise Fulfilled!!") 
    }
    catch(error){
        console.log("Promise Failed!!")
    }
}

run() */


// Another Use case for e-commerce site flow with async-await

function step1(){
    return new Promise(
        (resolve,reject) => {
            console.log("Step1 started")
            setTimeout(() => {
                console.log("Step1 Successful!!")
                resolve()
            },2000)
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
            },2000)
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


async function run() {
    try{
        await step1()
        await step2()
        await step3()
        await step4()
        console.log("Promise Fulfilled!!!")

    }
    catch(error){
        console.log("Promise Rejected!!!")
    }
    
}

run()