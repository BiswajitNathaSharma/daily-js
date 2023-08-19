// in this code file we will understand about math library


// abs of a given -ve number always returns the +ve value and +ve value remains unchanged.
console.log(Math.abs(-2)); //2
console.log(Math.abs(2));   //2



// floor ceil round
console.log(Math.ceil(4.9)); //returns the top most integer of given decimal number.
console.log(Math.floor(4.9));//returns the lower most integer of given decimal number.
console.log(Math.round(4.9));//returns the rounded integer of given decimal number.



//use of math library in array
console.log(Math.min(1, 8, 8, 4, 0)); //returns the minimum value of given array.
console.log(Math.max(1, 8, 8, 4, 0)); //returns the maximum value of given array.

//Math.random
console.log(Math.random()); //Returns a pseudorandom number between 0 and 1.
console.log((Math.random() * 10)+ 1); //Returns number between 1 to 10 without 0.

//for find a number between the given range we follow this method
let min = 10;
let max = 20;
console.log(Math.floor((Math.random() * (max - min +1)) + min));
