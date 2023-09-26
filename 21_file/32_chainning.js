let myNums = [1, 2, 3, 4, 5, 6, 7]
const newNums = myNums.map((num)=> num+10).map((num)=> num+2).filter((num)=>num>14) 
console.log(newNums);