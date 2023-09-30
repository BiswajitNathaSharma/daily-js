//falsy values: 0, false, "", -0, Bigint, 0n, null, undefined, NaN, document.all 
//the values always returns false values.

//truthy values meths: "false", '0', " ", [], {}, function(){}
//the values always returns true values.


let userAge
if (userAge) {
    console.log(`user age is ${userAge}`);
}
else {
    console.log(`enter user age`);  //executed
}

let user_Age = 23
if (user_Age) {
    console.log(`user age is ${user_Age}`); //executed
}
else {
    console.log(`enter user age`);
}



//check what if given array is empty or not
let myArray = []
if (myArray.length === 0) {
    console.log(`array is empty`);    
}
else{
    console.log(`array values are: ${[...myArray]}`);
}
let my_Array = [1, 4, 3, 9, 6]
if (my_Array.length === 0) {
    console.log(`array is empty`);    
}
else{
    console.log(`array values are: ${[...my_Array]}`);
}

//check what if given object is empty or not
let myObj ={}
if (Object.keys(myObj).length === 0) {
    console.log(`object is empty`);    
}
else{
    console.log(`object values are: ${myObj}`);
}
let my_Obj = {
    userName: 'sharma',
    age: 20
}
if (Object.keys(my_Obj).length === 0) {
    console.log(`object is empty`);    
}
else{
    console.log("my objects are: ",my_Obj);
}




//Nullish coalescing operator (??)
//The nullish coalescing operator can be seen as a special case of the logical OR (||) operator. The latter returns the right-hand side operand if the left operand is any falsy value, not only null or undefined.
//it prevents program from unknown error occured by null and undefined, that are came from API.

// let val1 = 10 ?? 20
let val1 = null ?? 20
console.log(val1);
//if it gets a falsy value it ruturns the value after ?? mark, untill it gets truthy value.

// ternary operator: it evaluates the condition and if true then executes statement after ? and if false execute the statement after : . 
// (condition) ? true : false  -> general syntax
//EXASMPLE
let val2 = true ? 10 : 30
console.log(val2);      //10
let val3 = false ? 10 : 30
console.log(val3);      //30
