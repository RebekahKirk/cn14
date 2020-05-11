// let balance = 83
// const customerPin = 1234

// const withdraw = (pin, amount) => {
//     if (checkPin(pin) && checkAmount(amount)){
//         console.log(`Successfull, your current balance is £${balance}. After withdrawal your new balance will be £${balance-amount}`);
//     }else {
//         console.log(`Something went wrong please try again`);
//     }
// }

// const checkPin = (pin) => {
//     if(pin==customerPin){
//         console.log ("pin is correct")
//         return true;
//     }else{
//         console.log ("pin is incorrect");
//         return false;
//     }
// }

// const checkAmount = (amount) => {
//     if(amount <= balance){
//         console.log ("there is sufficient funds to withdraw");
//         return true;
//     }else{
//         console.log (`there are insufficient funds to withdraw ${amount} from ${balance}`);
//         return false;
//     }
// }

// withdraw(1234, 45);
// withdraw(1234, 12);

const userPin = 4567
let balance = 100

const withdraw = (pin, amount) => {
    if (checkPin(pin) && checkAmount(amount)) {
        console.log(`Sucess, you are able to withdraw £${amount}. Your new balance will be £${balance-amount}`);
    }else{
        console.log(`Unsucessfull you have insufficent funds to be able to withdraw £${amount}, please select a different amount`);
    }
}
const checkPin = (pin) => {
    if (pin == userPin) {
        console.log("Pin is correct");
        return true;
    }else{
        console.log ("Pin is incorrect");
        return false;
    }
}
const checkAmount = (amount) => {
    if (balance <= amount){
        console.log("Withdrawal permitted");
        return true;
    }else{
        console.log("Withdrawal declined");
        return false;
    }
}
withdraw(4567, 70);