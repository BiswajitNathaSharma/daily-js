//declaration of object
const myUser = {
    name : "sharma",
    age: 18
    //key: value
}
// key always treated as a string in javaScript

// access the value of object: 2 types
console.log(myUser.name);       //sharma
console.log(myUser["name"]);    //sharma

//use symbol in js object
const mySymbol = Symbol("key1")
const symbolInObj ={
    name: "lipu",
    age: 20,
    [mySymbol]: "key"
}

console.log(symbolInObj[mySymbol]);

// use functions on object
myUser.greeting = function(){
    console.log(`Hi good evening ${this.name}`);
}
myUser.greeting() // Hi good evening sharma
