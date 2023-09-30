const inCart = [22, 11, 33, 44]
let priceToPay = inCart.reduce((acc, price) => (acc + price), 0)
// console.log(priceToPay);

// Practical example of reduce
let flipkartCart = [
    {
        goods:"mirror",
        price:199
    },
    {
        goods:"remote",
        price:299
    },
    {
        goods:"tv",
        price:5000
    },
    {
        goods:"ac",
        price:2000
    }
]
let netPrice = flipkartCart.reduce((acc, item)=>( acc + item.price), 0)
console.log(netPrice);