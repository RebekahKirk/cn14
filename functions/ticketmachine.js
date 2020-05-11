// let age = 16

// if (age <= 17);
//     console.log("Child below the age of 18: £8")
// }else if (age >= 18 && age <=59);
//     console.log("Adult £10.95")
// else (age >=60);
//     console.log("Senior £7.50")
// }

let age=16
let childTicket=8.00
let oapTicket=7.5
let adultTicket=10.95
if (age<18){
    console.log(`You're a child, tickets are £${childTicket}`)
}
else if (age>59){
    console.log(`You old, tickets are £${oapTicket}`)
}
else {console.log(`£${adultTicket} please`)
}