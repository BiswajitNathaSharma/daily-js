//combining two object
const obj1= {
    name: "sharma",
    age: 20
}
const obj2= {
    name: "lipu",
    ageGroup: 19
}
// mathod 1
// const obj3 = Object.assign({}, obj1, obj2)

//method 2
const obj3 = {...obj1, ...obj2}
// console.log(obj3);

// access keys, values and entries of an object
console.log(Object.keys(obj2)); //[ 'name', 'age' ]
console.log(Object.values(obj2)); //[ 'lipu', 19 ]
console.log(Object.entries(obj2)); //[ [ 'name', 'lipu' ], [ 'age', 19 ] ]

// hasOwnProperty: returns a boolean value if the given argument is a property of that object
console.log(obj1.hasOwnProperty("age"));


//object de-structure: insted of writting obj2.name we can write here just name.
const {name} = obj2
console.log(name);

const {ageGroup: age} = obj2 //we use age insted of obj2.ageGroup
console.log(age);
