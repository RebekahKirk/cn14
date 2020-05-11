// // need a variable to reverse but need to make it an array first
// //convert pal into an array then reverse then join together into a string
// //compare pal to the reverse string

// let num = 12345;
// console.log(num);
// let numAsStr = (num.toString());
// console.log(numAsStr);
// let reverseStr = numAsStr.split('').reverse().join('');
// console.log(reverseStr);
// return reverseStr;

let num = 2002;
console.log(num);
let numAsStr = (num.toString());
console.log(numAsStr);
let strToArray = numAsStr.split('');
console.log(strToArray);
let reverseArray = strToArray.reverse();
console.log(reverseArray);
let reverseStr = reverseArray.join('');
console.log(reverseStr);

if (numAsStr == reverseStr){
    console.log(`${num} is a palindrome.`);
}else{
    console.log(`${num} is not a palindrome.`);
}