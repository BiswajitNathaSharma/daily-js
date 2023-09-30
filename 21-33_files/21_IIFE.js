//FUNCTION runned by normal function

function myFunc(){
    console.log("my function runned by normal function");
}
myFunc();

// function runned by  IIFE 
(function myFunc2(){
    console.log("my function runned by IIFE");
})();

//pass an argument into the IIFE
(function myFunc2(userName){
    console.log(`my function runned by IIFE, name: ${userName}`);
})("lipu")


