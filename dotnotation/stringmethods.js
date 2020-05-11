const sentence = 'Hello my name is Rebekah and I am 27';

//Use search() - search a word from a string 
console.log(sentence.search("my"));

//Use lastIndexOf() - shows the numerical positions of the letter or number you are looking for within the string
console.log(sentence.lastIndexOf("s"));

//Use slice() - shows the string starting at the index you have indicated 
console.log(sentence.slice('9'));

//Use substring(start, end) - displays the requested characters from the string from a start and a specified end 
console.log(sentence.substring(0, 4));

//Use substr(start, length) - displays the amount of requested characters from the string from a specified start
console.log(sentence.substr(2,4));

//Use replace() - returns a new string with specified part replaced

//Use concat() - joins two or more strings together

//Use charAt() - returns the character at the specified index within a string