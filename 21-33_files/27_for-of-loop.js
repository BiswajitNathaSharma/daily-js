// for of loops

let arr = [1, 2, 3, 4, 5, 6, 7]
for (const num of arr) {
    if (num==3) {
        continue
    }
    console.log(num);
}

//for of in string
let str = "sharma"
for (const char of str) {
    console.log(char);
}

//for of in maps
let map = new Map()
map.set('jitu', 'soumya')
map.set('miku', 'gyana')
map.set('subha', 'subhendu')
map.set('sharma', 'biswajit')

for (const [key] of map) {
    console.log(key);
}

// for of in object 
let myobject = {
    username: 'sharma',
    age:20,
    id: 23234
}

for (const [key] of myobject) {
    console.log(key);    //myobject is not iterable
}