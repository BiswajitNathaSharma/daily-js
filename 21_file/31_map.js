let myNums = [1, 2, 3, 4, 5, 6, 7]
const newNums = myNums.map((num)=>{
    return num+10
})
console.log(newNums);

// Use foreach here to replace map function
let myNewNums = []
myNums.forEach((num)=>{
    myNewNums.push(num+10)
})
console.log(myNewNums);