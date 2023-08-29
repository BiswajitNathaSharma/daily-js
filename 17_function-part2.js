// lets discuss how can we use rest operator using function.
//this is used to calculate the total price of the item in your cart


function calculatePriceInCart(...price){
    return price;
}
let cartValues = calculatePriceInCart(300, 500, 600, 120, 705, 800)
// console.log(cartValues);

let sum = 0;
cartValues.forEach(element => {
    sum+=element;
});

// console.log(sum);


// +++++++++++++++++++++++++++++++++++INTERVIEW++++++++++++++++++++++++++++++++++


function printNumbers(...number){
    // console.log(number);   //[ 30, 50, 56, 55, 39 ]
}
printNumbers(30, 50 ,56 ,55, 39)

function printNumbers2(val1, val2, ...number){
    // console.log(number);   //[ 56, 55, 39 ]: because first 2 valus are assigned to val1 and val2 that are not printed by programmer, so they can't be displayed.
}
printNumbers2(30, 50 ,56 ,55, 39)

let myNewArray = [200,5400, 700, 705]

function myObj(arr1){
    console.log(arr1[2]);
}
myObj(myNewArray)