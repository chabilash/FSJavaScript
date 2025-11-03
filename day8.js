/*
Call-Back Functions

*/

function searchItem(itemName) {
    console.log(`Searching item ${itemName}`);
    return `ItemId: ${itemName}10`;
}

function addToCart(itemId){
    console.log(`Adding item with id as ${itemId} to the cart`);
    return `cartId: ${itemId}`
}

function checkoutCart(cartId){
    console.log(`Checking out items placed in cartId ${cartId}`);
    return `checkoutId: ${cartId}`;
}

function makePayment(checkoutId) {
    console.log(`Making payment for Checkout id as ${checkoutId}`);
    return `Payment Id geneated is: ${checkoutId}`;
}

const itemId = searchItem("IPhone");
const cartId = addToCart(itemId);
const checkoutId = checkoutCart(cartId);
const paymentId = makePayment(checkoutId);





function calculate(a,b, fn){
    
    console.log("First line");    
    console.log("second line");
    //fn(a,b);   
    //

}

function sum(a,b){
    console.log("Sum is getting called!")
    return a+b;
}

/*
function multiply(a,b){
    console.log("multiply is getting called!")
    return a*b;
}
*/

calculate(2,3, sum );
sum(2,3);






