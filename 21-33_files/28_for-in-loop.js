// for in loop in object
let programShortcut = {
    cpp : 'c++',
    py : 'python',
    js : 'javascript'
}

for (const key in programShortcut) {
  console.log(`${key} shortcut of ${programShortcut[key]}`);
}


// for in loop in array 

let programmingArray =['cpp', 'rb', 'py', 'css']

for (const key in programmingArray) {
  console.log(`${programmingArray[key]}`);
}
