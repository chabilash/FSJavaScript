/*
Use-case: ATM Txn

1. Insert ATM card.                           generte #cardId
2. Enter PIN.                                 send    #pinId
2. Select SAVINGS account.                    send    #savingsAcc
3. Enter Amount                               send    #amountInfo
4. Enter Withdraw                             send    #withdrawId
5. Collect cash                               send    #clloectCash
6. Receive ATM card                           send    #receivedATM

*/

function insertATM(cardName , cb1 ){
    console.log(`${cardName} bank card is inserted`)  
    const cardId = `${cardName}`;
    cb1(cardId, selectAccount)
}

function enterPIN(cardId, cb2){
    console.log(`Adding PIN to the ${cardId} bank card`)  
    const pinId = `${cardId}1234`;
    cb2(pinId, enterAmount)
}
function selectAccount(pinId , cb3){
    console.log(`Account type for ${pinId} is selected`)
    const accType = `${pinId}SAV`
    cb3(accType, enterWithdraw)
}
function enterAmount(accType , cb4){
    console.log(`Amount entered to withdraw from ${accType}`)
    const amtInfo = `${accType}100`
    cb4(amtInfo , collectCash)
}
function enterWithdraw(amtInfo , cb5){
    console.log(`Entered Withdraw button for ${amtInfo}`)
    const entWithdraw = `${amtInfo}WITHDRAW`
    cb5(entWithdraw , recievedATM)

}
function collectCash(entWithdraw , cb6){
    console.log(`Received CASH for ${entWithdraw}`)
    const receiveCash = `${entWithdraw}RCV`
    cb6(receiveCash)
}
function recievedATM(receiveCash){
    console.log(`ATM card for ${receiveCash} received successfully`)
    return console.log(`Transaction Successfully Completed`)

}


insertATM("ICICI", enterPIN)