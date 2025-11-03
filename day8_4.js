/*

*/

function searchItem(itemName , cb1){
    console.log(`Searching item ${itemName}`);   
    const itemId = `ItemId: ${itemName}10`;
    cb1(itemId , checkoutCart)
}
function addToCart(itemId , cb2){
    console.log(`Adding item with id as ${itemId} to the cart`);
    const cartId = `cartId: ${itemId}`;
    cb2(cartId , makePayment)
}
function checkoutCart(cartId, cb3){
    console.log(`Checking out items placed in cartId ${cartId}`);
    const checkoutId = `checkoutId: ${cartId}`;
    cb3(checkoutId)
}
function makePayment(checkoutId){
    console.log(`Making payment for Checkout id as ${checkoutId}`);
    return `Payment Id geneated is: ${checkoutId}`;
}


searchItem("Iphone", addToCart)