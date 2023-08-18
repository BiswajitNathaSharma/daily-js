// ARRAY
//declaration of array

const myArray = [1,2,3,4,5,6]
const myArray2 = new Array(1,3,4,5,6,778,6)
// console.log(myArray2);
// console.log(myArray);

//array methods

// concat
// console.log(myArray.concat(myArray2));

// copyWithin
// console.log(myArray.copyWithin(1, 4));

// push -> add the given element on the last index.
// myArray.push(50)
// console.log(myArray);

// pop -> remove an element from last index of that array
// myArray.pop()
// console.log(myArray);

//reverse -> reverse the elements of an array
// console.log(myArray.reverse());


//shift -> removes the 1st element in array
// myArray.shift()
// console.log(myArray);

//slice(m, n) -> cuts the array from m upto (n-1), can't change the origional value of 
console.log(myArray.slice(2, 4));

//splice(m, n) -> cuts the array from m upto (n-1), can't change the origional value of 
console.log(myArray.splice(2, 4));


