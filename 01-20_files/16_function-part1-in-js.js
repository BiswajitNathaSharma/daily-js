// simple function syntax
// adding 2 numbers
function sum(number1, number2) {
  if (typeof number1 == typeof 0 && typeof number2 === typeof 0) { //checking  the given argumrnts are numbers or not
    return number1 + number2;
  } else { //if given arguments are not numbers then say to give two numbers
    return "enter TWO number to find the sum";
  }
}

let catchTheNumber = sum(5, 9);
console.log(catchTheNumber);
