// heap -> primitive datatype
// stack -> non-primitive datatypes


//HEAP: Here when we assign the value of userOne to userTwo, it copy the value of userOne and Assign to userTwo.
//Hence when we update the value of userTwo to "sharam" then userOne was unchanged.
//userOne -> nawed, userTwo -> sharma
let userOne = "naawed"
let userTwo = userOne;
userTwo = "sharma"
console.log(userOne);
console.log(userTwo);


//STACK: Here when we assign the value of myObjectOne to myObjectTwo, it take the direct referance the value of myObjectOne to myObjectTwo (No copy like HEAP).
//Hence when we update the value of myObjectTwo to email to "sharmaoncourse@gmai.com" then myObjectOne was also changed.
//myObjectOne -> "nawed@gmail.com", myObjectTwo -> "sharmaoncourse@gmai.com"
let myObjectOne = {
    email: "nawed@gmail.com",
    zippin: 754204
}

let myObjectTwo = myObjectOne
console.log(myObjectOne.email);
myObjectTwo.email = "sharmaoncourse@gmai.com"
console.log(myObjectTwo.email);