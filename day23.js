/*
Promise -> resolve() , reject()


*/

/*
//Handle everything synchronously
const url = "http://127.0.0.1:8081"

const productName = "shoes"
console.log(`product name is ${productName}`);  //sync
console.log("Initiate Buying Process!"); //sync

const productId = fetch(`${url}/search/${productName}`); // {"ItemId": "shoes123"}  //async
console.log(`productid is ${productId}`);  //Pending

const cartId = fetch(`${url}/addToCart/${productId}`);  //
console.log(`cartId is ${cartId}`);   //Pending

const paymentId = fetch(`${url}/payment/${cartId}`);
console.log(`My payment id is: ${paymentId}`);  //Pending

console.log("Buying Process Completed!");  //sync   

*/


//Dealing with Promise:
//then 
/*
const url = "http://127.0.0.1:8081"

const productName = "shoes"
console.log(`product name is ${productName}`);  //sync
console.log("Initiate Buying Process!"); //sync


fetch(`${url}/search/${productName}`)  //Promise: pending --> fulfilled // received the data
//.then(res => console.log(res));
.then(res => res.json()) //promise get fullfilled
.then(data => {
    setTimeout(()=>{console.log("SetTimeOut Executed")}, 1000);
    console.log(`Product id is: ${data.ItemId}`);
    return data.ItemId})  //shoes123
.then(ItemId => fetch(`${url}/addToCart/${ItemId}`))  
.then(res => res.json())
.then(data => {
    console.log(`Cart id is: ${data.CartId}`);
    return data.CartId})
.then(CartId => fetch(`${url}/payment/${CartId}`))
.then(res => res.json())
.then(data => {
    console.log(`Payment id is: ${data.PaymentId}`);})
//.then(()=> console.log("Process completed!"))

console.log("Process completed!")

//console.log(output);
*/


/*
; // {"ItemId": "shoes123"}  //async
console.log(`productid is ${productId}`);  //Pending

const cartId = fetch(`${url}/addToCart/${productId}`);  //
console.log(`cartId is ${cartId}`);   //Pending

const paymentId = fetch(`${url}/payment/${cartId}`);
console.log(`My payment id is: ${paymentId}`);  //Pending

console.log("Buying Process Completed!");  //sync  
*/



//async await
const url = "http://127.0.0.1:8081"

const productName = "shoes"
console.log(`product name is ${productName}`);  //sync
console.log("Initiate Buying Process!"); //sync


//convert normal function into a async function
async function searchProduct(productName) {
   const res = await fetch(`${url}/search/${productName}`)
   const data = await res.json();
    console.log(`Product id is: ${data.ItemId}`);
   //const ItemId = data.ItemId;
   const  res2 = await fetch(`${url}/addToCart/${data.ItemId}`);
   const data2 = await res2.json();
   console.log(`Cart id is: ${data2.CartId}`);
   const res3 = await fetch(`${url}/payment/${data2.CartId}`);
   const data3 = await res3.json();
   console.log(`Payment id is: ${data3.PaymentId}`);

}

searchProduct(productName);
//console.log(productId);
console.log("Process completed!");

/*
fetch(`${url}/search/${productName}`)  //Promise: pending --> fulfilled // received the data
//.then(res => console.log(res));
.then(res => res.json()) //promise get fullfilled
.then(data => {
    setTimeout(()=>{console.log("SetTimeOut Executed")}, 1000);
    console.log(`Product id is: ${data.ItemId}`);
    return data.ItemId})  //shoes123
.then(ItemId => fetch(`${url}/addToCart/${ItemId}`))  
.then(res => res.json())
.then(data => {
    console.log(`Cart id is: ${data.CartId}`);
    return data.CartId})
.then(CartId => fetch(`${url}/payment/${CartId}`))
.then(res => res.json())
.then(data => {
    console.log(`Payment id is: ${data.PaymentId}`);})
//.then(()=> console.log("Process completed!"))
*/