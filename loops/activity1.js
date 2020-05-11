const subOrder = (top1, top2, top3, top4, top5)=> {
    console.log(`Your sandwich order containing ${top1}, ${top2}, ${top3}, ${top4} & ${top5} will be ready soon.`)
}

subOrder("butter", "chicken", "mayo", "lettuce", "cucumber");

let values = [
    "1",
    "2",
    "3"
];

console.log(values);
values.unshift("4");
console.log(values);

let favouriteFilms = [
    "film1",
    "film2",
    "film3",
    "film4"
];

console.log(favouriteFilms);
favouriteFilms.push("film5, film6");
console.log(favouriteFilms);
favouriteFilms.push("film7");

for(let i = 0; i<favouriteFilms.length; i++){
    console.log(favouriteFilms[i]);
}