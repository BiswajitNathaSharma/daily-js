// the code inside the if statement will only run if the given argument passes to it is true.
//conditional operators: ==, ===, >, >=, <, <=, !=, !==.
//logical operators: &&, ||, 

//example

let score = 301

//IF STATEMENT


if (score>200) {
    console.log(`score is greater than 200`);
}


//IF-ELSE STATEMENT


if (score>302) {
    console.log(`score is greater than 302`);
}
else{
    console.log(`score is less than 302 and score is: ${score}`);
    //score is less than 302 and score is: 300
}


//NESTED ELSE-IF 
if (score < 100) {
    console.log('score is less than 100');
} else if (score < 200) {
    console.log('score is less than 200')
}else if (score < 300){
    console.log('score is less than 300');
}
else console.log('score is greater than 300');