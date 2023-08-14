// investigational study about numbers in javaScript. 


let score = 89
console.log(typeof(score)); // string

let scoreToNumber = Number(score)
console.log(typeof(scoreToNumber)); //number

console.log(scoreToNumber);     //NaN- not a number.

/* 
let temprature = ""
let tempratureToNumber = Number(temprature)
console.log(tempratureToNumber);        //0 
 */

/*
let temprature = true
let tempratureToNumber = Number(temprature)
console.log(tempratureToNumber);        //1
*/

/*
let temprature = false
let tempratureToNumber = Number(temprature)
console.log(tempratureToNumber);        //0
*/
/*
let temprature = undefined
let tempratureToNumber = Number(temprature)
console.log(tempratureToNumber);        //NaN
*/



/*  
+++++++++++++++++++++++++++++NOTES+++++++++++++++++++++++++++++
"33"  -> 33
true ->  1
false -> 0
undefined -> NaN
"sharma"    -> NaN
""      -> 0
 */

// ++++++++++++++++++++++++++++++++++++++BOOLEAN+++++++++++++++++++++++++++++

let isLogedIn = 0
let ToBoolean = Boolean(isLogedIn)
console.log(ToBoolean);
/*  
+++++++++++++++++++++++++++++NOTES+++++++++++++++++++++++++++++
0/-0   -> false
any integer ->true
"33"  -> true
true ->  true
false -> false
undefined -> false
"sharma"    -> true
""      -> false
 */

let score2 = 22
const name2 = String(score)
console.log(typeof(name2)); //string

console.log(name2);  // 89