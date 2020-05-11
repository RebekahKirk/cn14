let time = 9;
let placeOfWork = London
let townOfHome = Luton

    if (time <8 || time >17){
        console.log(`At ${time} I will be at home in ${townOfHome}`);
    }else if (time >8 || time <17){
        console.log('At ${time} I will be at work in ${townOfWork}');
    }else{
        console.log ("I'm not sure where I am")
    }

let time = 9;
let placeOfWork = London
let townOfHome = Luton
    if (time < 8){
        console.log(`At ${time} I will be at home in ${townOfHome}`);
    }else if (time >= 8 || time <= 17){
        console.log('At ${time} I will be at work in ${townOfWork}');
    }else{
        console.log ("I'm not sure where I am")
    }