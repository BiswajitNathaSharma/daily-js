// FOR-LOOP
//basic for loop to print 1 to 10 numbers
for (let i = 1; i <= 10;  i++) {
    console.log(`value of i is ${i}`);  
}

//break statement
for (let i = 1; i <= 10;  i++) {
    if(i==8) {
        break; //when i value becomes 8 it will break the flow. output: 1, 2, 3, 4, 5, 6, 7
    }
    console.log(`value of i is ${i}`);   
}

//CONTINUE

for (let i = 1; i <= 10;  i++) {
    if(i==8) {
       continue  //when i value becomes 8 it will skip that value and carry-on to next step. output: 1, 2, 3, 4, 5, 6, 7, 9,10
    }
    console.log(`value of i is ${i}`);   
}