// a curly-bracket denotes the scope. if a variable is declared inside the scope then it should not be used outside the scope, if it can be accessed out side the scope then it is can create a bad situation.
// thats why peoples in today dont use var any more, because it can be access outside the scope: follow the following code snipped. 

if (true) {
    let a = 2
    const b = 3
    var c = 4
}

// console.log(a);  //error
// console.log(b);  //error
// console.log(c);     // 3

let a = 5
if (true) {
    let a = 2
    const b = 3
    console.log(a);     /* 2: Although it is inside the the if scope it returns the
                            value thet assign to it inside the scope. */
    console.log(b);           
}

console.log(a);         /* 5: because it is declared out side the if scope it cant 
                            access the value inside the if scope. */