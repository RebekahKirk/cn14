let space1 = "     x    ";
let space2 = "     o    ";
let space3 = "     o    ";
let space4 = "     x    ";
let space5 = "     x    ";
let space6 = "     o    ";
let space7 = "     x    ";
let space8 = "     o    ";
let space9 = "     x    ";
console.log("              |              |              ");
console.log(`  ${space1}  |  ${space2}  |  ${space3}`);
console.log("              |              |              ");
console.log("--------------------------------------------");
console.log("              |              |              ");
console.log(`  ${space4}  |  ${space5}  |  ${space6}`);
console.log("              |              |              ");
console.log("--------------------------------------------");
console.log("              |              |              ");
console.log(`  ${space7}  |  ${space8}  |  ${space9}`);
console.log("              |              |              ");
if ((space1 == "x" && space2 == "x" && space3 == "x") || (space1 == "o" && space2 == "o" && space3 == "o")){
    console.log("You win");
}
