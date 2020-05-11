// let space1 = "     x    ";
// let space2 = "     o    ";
// let space3 = "     o    ";
// let space4 = "     x    ";
// let space5 = "     x    ";
// let space6 = "     o    ";
// let space7 = "     x    ";
// let space8 = "o";
// let space9 = "x";

// const topRow = space1, space2, space3
// const midRow = space4, space5, space6
// const botRow = space7, space8, space9

// console.log("              |              |              ");
// console.log(`  ${space1}  |  ${space2}  |  ${space3}`);
// console.log("              |              |              ");
// console.log("--------------------------------------------");
// console.log("              |              |              ");
// console.log(`  ${space4}  |  ${space5}  |  ${space6}`);
// console.log("              |              |              ");
// console.log("--------------------------------------------");
// console.log("              |              |              ");
// console.log(`  ${space7}  |  ${space8}  |  ${space9}`);
// console.log("              |              |              ");

// if (topRow = x, x, x || o, o, o){ 
//     console.log("You have won");
// }else if (midRow = x, x, x || o, o,o){
//     console.log("You have won");
// }else if (botRow = x, x, x || o, o, o){
//     console.log("You have won");
// }else{
//     console.log("You have lost");
//     }

// switch (topRow) {
//     case `x,x,x`:
//     case `o,o,o`:
//         console.log ("You have won")
// }
// switch (midRow) {
//     case `x,x,x`:
//     case `o,o,o`:
//         console.log ("You have won")
// }
// switch (botRow) {
//     case `x,x,x`:
//     case `o,o,o`:
//         console.log ("You have won")
// }

//  Let's go back to our naughts and crosses board
//Create a function that takes 9 parameters and logs our naughts and crosses board to the console.

const game = (space1, space2, space3, space4, space5, space6, space7, space8, space9) => {

console.log("     |     |              ");
console.log(`  ${space1}  |  ${space2}  |  ${space3}`);
console.log("     |     |              ");
console.log("-----------------");
console.log("     |     |              ");
console.log(`  ${space4}  |  ${space5}  |  ${space6}`);
console.log("     |     |              ");
console.log("-----------------");
console.log("     |     |              ");
console.log(`  ${space7}  |  ${space8}  |  ${space9}`);
console.log("     |     |              ");
}
game("x","o","o","x","x","o","o","x","x");
