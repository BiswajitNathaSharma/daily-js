//for each loop: generally it is used in array to get access on every item.

let myArr = ['sharma', 'anand', 'subha', 'pranab', 'miku']
myArr.forEach( (item) => {
    //console.log(item);
})

// use foreach loop to access a object in side the array 

let objectArray =[
    {
        username: 'sharma',
        age: 20
    },
    {
        username: 'anand',
        age: 21
    },
    {
        username: 'subha',
        age: 18
    }
]

objectArray.forEach((item) => {
    console.log(`name of user is ${item.username} and age is ${item.age}`);
})