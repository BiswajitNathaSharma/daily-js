//STRING

// 4 ways to declare a string
const gameName1 = new String('sharma-game') //using String constructor
const gameName2 = "sharma-game" //double quotation
const gameName3 = 'sharma-game' //single quoat
const gameName4 = `sharma-game` //back ticks

                                //character access
// console.log(gameName1.charAt(5)); Output: a
// console.log(gameName1[5]);      Output: a

                                //concat
const concatedString= gameName1.concat(gameName2,gameName3)
const concatedStringArray= ['hello ', 'i ', 'am ', 'sharma ']
//console.log(concatedString);
//console.log("".concat(...concatedStringArray));

                                //charCodeAt()
//console.log(gameName4.charCodeAt(4)); //returns the value of UTF-16 code unit

                                //endsWith()
//console.log(gameName1.endsWith("w")); //false
//console.log(gameName1.endsWith("me")); //true
//returnds whether a string ends with given arguments or not



