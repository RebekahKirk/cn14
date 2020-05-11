//Write a function called dataChecker which takes two parameters (string, rank).
// If the string is equal to 'codenation' and the rank is equal to 1 then log to the console a template string to tell us both are correct.
// If the string is 'codenation' but the rank isnt  1 log to the console a template string that tells us the string was correct but the rank was wrong.
//Finally if the string was not equal to 'codenation' then log to the console a template string which tells us that the string was wrong.

let string = ("codenation")
let rank = 1

const dataChecker = (string, rank) =>{
    if (string == "codenation" && rank == 1){
    console.log(`Both string ${string} & rank ${rank} are correct`);

    }else if (string = "codenation" && rank != 1);{
    console.log(`The string ${string} is correct but the rank ${rank} is incorrect`);

    }else if (string != "codenation" && rank ==1);{
        console.log(`The string ${string} is incorrect but the rank ${rank} is correct`);
        
    }else{
        console.log(`Both the string ${string} & rank ${rank} are incorrect`)
    }
}

dataChecker(text, 1);