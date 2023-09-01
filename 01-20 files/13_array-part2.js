const teachers = ['sanjay sir', 'ganesh sir', 'amiya sir']
const student = ['ashish', 'subha', 'nawed']



//concat and spread doing their job well but concat can only add only 2 array at once
//but spread do unlimited
console.log(teachers.concat(student));
console.log([...teachers,...student]);


//flat operation on arrays
const arrToFlat = [1, 2, 3, [6, 7], [6, 9, 0, [5, 4, 1, 9]]]
console.log(arrToFlat.flat(Infinity));
// opens all array to given array as a element


console.log(Array.isArray(arrToFlat)); //true: method to know it is array or not
console.log(Array.from("sharma")); // [ 's', 'h', 'a', 'r', 'm', 'a' ]

let num1 = 100, num2 = 200, num3 = 300;
console.log(Array.of(num1, num2, num3));    //[ 100, 200, 300 ]
