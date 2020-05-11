//create a variable called person with two keys name & age
//add a day variable

// create a key called weekendAlarm with a value saying "no alarm needed", and a key called weekdayAlarm, with a value saying "get up at 7am".
//create a variable called day and one called alarm.
//if day is saturday or sunday set the alarm to weekend alarm.
// if day is weekday set the alarm to weekday alarm.

//add a key with value showing a list of songs

let day = "Saturday";

const person = {
    name: "Rebekah",
    age: 27,
    weekdayAlarm: "Get up at 7am",
    weekendAlarm: "No alarm needed",
    songs: ["song1", "song2", "song3"]
}

console.log(person.name);

if (day.toLowerCase()=="saturday" || day.toLowerCase()=="sunday"){
    console.log(person.weekendAlarm);
}else{
    console.log(person.weekdayAlarm);
}

console.log(person); //prints the whole object
console.log(person.songs); // prints the songs from the object
console.log(person.songs[2]); // prints the 3rd song