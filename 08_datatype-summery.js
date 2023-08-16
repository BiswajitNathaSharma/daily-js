/* according to the official doc datatypes are of 2 types
i) primitive
ii) non-primitive / refrence type


primitive datatyps are of 7 types: string, number, null, boolean, undefines, symbol, bigInt

non-primitive are of 2 types: array, object, function.
*/

//primitive data type example

let score = 100
console.log(typeof(score));
let username = "sharma"
console.log(typeof(username));
let nullvalue = null
console.log(`important ${typeof(nullvalue)} `);
let undefinedValue
console.log(typeof(undefinedValue));
let booleanValue = true
console.log(typeof(booleanValue));
let symbolValue = Symbol('120')
console.log(typeof(symbolValue));
let bigIntNumber = 3n
console.log(typeof(bigIntNumber));

//non-primitive datatype example

//array
let MyArray = [1,3,34,4,5]
console.log(typeof(MyArray)); //object

//OBJECT

let MyObject ={
    name:'sharma',
    age: 20,
    zipPin: 754204
}
console.log(typeof(MyObject)); //object

//FUNCTION

let MyFunction =function(){
console.log("Hello World");
}
MyFunction()
console.log(typeof(MyFunction)); //function