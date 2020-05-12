//Create the class then the constructor showing what information you require from the person/thing entering it in the brackets. Then set your rules for the information with this._??
class Car{
    constructor(reg){
        this._reg = reg;
        this._hours = 0;
        this._charge = 0.00;
    }
//Use getters to tell the code what information it needs to go and get from the class constructor.
    get reg(){
        return this._reg;
    }
    get hours(){
        return this._hours;
    }
    get charge(){
        return this._charge;
    }
//Next is the method, what do you want to be done to the information. E.G below hours must plus 1 everytime and the charge is equal to 1.50 or should plus 1.50 everytime.
    increaseHours(){
        this._hours++;
        this._charge += 1.50;
    }
}
//This is the function to be run and what should be displayed as the statement.
const pay = (reg, hr) => {
    const car = new Car (reg);
    for (i=0; i<hr; i++){
        car.increaseHours();
    }
    console.log(` ${reg} you will need to pay £${car.charge} for ${car.hours} hours.`);
}
//Run the function with the information provided. 
pay ("M7 CAR", 5); //Ouput 'M7 CAR you will need to pay £7.5 for 5 hours'
pay ("M8 CAR", 2); //Output 'M8 CAR you will need to pay £3 for 2 hours'