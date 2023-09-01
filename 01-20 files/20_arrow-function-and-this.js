//THIS KEYWORD:- This keyword refers to the current context of the scope. EX-
let user= {
    username: "sharma",
    age: 20,
    welcomeMessagu: function(){ 
        console.log(`Hi ${this.username}, welcome to our new blog`);
        
    }
    
}
console.log(this)
user.welcomeMessagu()
user.username = "lipu"
user.welcomeMessagu()

function testThis(){
    let username = "sharma"
    //console.log(this.username); //undefined: can't use this keyword in function
}
testThis()


// ARROW FUNCTION INTRODUCTION
let testThis = () => {
    let username = "sharma"
    console.log(username);
}
testThis();

// const addTwoNum = (num1, num2) =>{
//     return num1 + num2           //8                    //8: explicit return
// }

// const addTwoNum = (num1, num2) => num1 + num2           //8: implicit return


// const addTwoNum = (num1, num2) => (num1 + num2)           //8   

// const addTwoNum = (num1, num2) => {username:"sharma"}//undefined: cant return object in this method.

const addTwoNum = (num1, num2) =>({username:"sharma"})//executed: you need to warp it into bracket to return this

console.log(addTwoNum(3, 5));
