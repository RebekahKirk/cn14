//Create an object called coffeeShop with key values of:
//branch, drinks with prices, food with prices
//And methods called drinksOrdered and foodOrdered. They should return a string saying [Your order] is ... with all items chosen with costs, and the total cost.

// const coffeeShop = {
//     branch: "Luton",
//     drinksWithPrice: {
//         drinks: ["Tea", "Coffee", "Frappachino"],
//         priceDrinks: [1.50, 1.50, 3],
//     },
//     foodWithPrice: {
//     food: ["Sandwich", "Soup", "Crisps"],
//     priceFood: [2.50, 2, 1],
//     },

// total (){
//     let sum = (this.drinksWithPrice.priceDrinks[1])+(this.foodWithPrice.priceFood[1]);
//     return sum;
//     },
// fullOrder(){
//     return `Your order is ${this.drinksWithPrice.drinks[1]} and ${this.foodWithPrice.food[1]}, the total cost of this order is £${this.sum()}`
// }
// };

// console.log(coffeeShop.fullOrder());

coffeeShop = {
    branch: "Luton",
    drinks: ["tea", "coffee", "frappachino"],
    drinksPrices: [2.50, 3, 3.50],
    food: ["sandwich", "soup", "crisps"],
    foodPrices: [3, 2, 1],

    sum(){
        let total = (this.drinksPrices[1] + this.foodPrices[1])
        return total
    },

    fullOrder(){
        return `Your order is ${this.drinks[1]} & ${this.food[1]} and the total cost is £${this.sum()}`
    }
};
console.log(coffeeShop.fullOrder());
console.log(this.drinks[2] & this.food[1]);