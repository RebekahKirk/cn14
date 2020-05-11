// let orderCount  = 0;

// const takeOrder = (topping) => {
//     console.log(`pizza with ${topping}`);
//     orderCount++;
// }

// takeOrder("pineapple");

let orderCount  = 0;

const takeOrder = (pizzaSize, topping) => {
    console.log(`You have ordered a ${pizzaSize} with ${topping}`);
    orderCount++;
}

takeOrder(`small, pepperoni`);
takeOrder(`large, pineapple`);