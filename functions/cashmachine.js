// let accnumber = 123456;

// const cashWithd = (amount, accnumber) => {
//     console.log (`withdrawing ${amount} from ${accnumber}`);
// }

// cashWithd (300, 123456)


// const userPin = 4567
// let balance = 100

// const withdraw = (pin, amount) => {
//     if (checkPin(pin) && checkAmount(amount)) {
//         console.log(`Sucess, you are able to withdraw £${amount}. Your new balance will be £${balance-amount}`);
//     }else{
//         console.log(`Unsucessfull you have insufficent funds to be able to withdraw £${amount}, please select a different amount`);
//     }
// }
// const checkPin = (pin) => {
//     if (pin == userPin) {
//         console.log("Pin is correct");
//         return true;
//     }else{
//         console.log ("Pin is incorrect");
//         return false;
//     }
// }
// const checkAmount = (amount) => {
//     if (balance <= amount){
//         console.log("Withdrawal permitted");
//         return true;
//     }else{
//         console.log("Withdrawal declined");
//         return false;
//     }
// }
// withdraw(4567, 70);

const userPin = 4567
let balance = 100
let pinTries = 3

const withdraw = (pin, amount) => {
    if (checkPin(pin) && checkAmount(amount)) {
        console.log(`Sucess, you are able to withdraw £${amount}. Your new balance will be £${balance-amount}`);
    }else{
        console.log(`Unsucessfull you have insufficent funds to be able to withdraw £${amount}, please select a different amount`);
    }
}
const checkPin = (pin) => {
    if ((pin == userPin) && pinTries <3) {
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