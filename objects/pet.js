// Create an object called pet with key values of:
//name, typeOfPet, age, colour
//And methods called eat and drink. They should return a string saying [Your pet name] is eating/drinking.

const pet = {
    name: "Buster",
    typeOfPet: "Dog",
    age:"3",
    colour: "black brindle",
    eat(){
        return `${this.name} is eating`
    },
    drink(){
        return `${this.name} is drinking`
    }
};

console.log (pet.name); // Returns the name of your pet
console.log (pet.drink()); // Returns the name of your pet and the drink function
console.log (pet.eat()); // Returns the name of your pet and the eat function