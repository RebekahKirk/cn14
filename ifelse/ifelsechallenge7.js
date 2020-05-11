let word = "sugar"
let firstLetter = word.substr(0,1);
let lastLetter = word.substr(word.length -1);

console.log(firstLetter);
console.log(lastLetter);

if (firstLetter === lastLetter){
    console.log("Yes the first and last letter are the same");
}else{ 
    console.log("No the first and last letter are not the same");
}

