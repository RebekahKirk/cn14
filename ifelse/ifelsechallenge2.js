// let num = "34";
// switch(num % 3){
//     case 0:
//         console.log("divisble by 3");
//         break;
//     default:
//         console.log("not divisble by 3")
// }

let num = 34;

switch (true){
    case num % 3 == 0:
    case num % 5 == 0:
        console.log ("Divisble by 3 or 5");
        break;
    default:
        console.log("Not divisble by 3 or 5");
        break;
}