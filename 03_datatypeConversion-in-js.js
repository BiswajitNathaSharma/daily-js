// investigational study about numbers in javaScript. 


let score = 89
//let score = "89"
console.log(typeof(score)); // string

let scoreToNumber = Number(score)
console.log(typeof(scoreToNumber)); //number

console.log(scoreToNumber);     //NaN- not a number.


let temprature = ""
let tempratureToNumber = Number(temprature)
console.log(tempratureToNumber);        //0 


let temprature1 = true
let tempratureToNumber1 = Number(temprature1)
console.log(tempratureToNumber1);        //1



let temprature2 = false
let tempratureToNumber2 = Number(temprature2)
console.log(tempratureToNumber2);        //0


let temprature3 = undefined
let tempratureToNumber3 = Number(temprature3)
console.log(tempratureToNumber3);        //NaN




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

//SYMBOL

// const sys = new Symbol() //can't construct using new keyword.
const sys = Symbol("sharma") 
console.log(sys); //Symbol(sharma)
