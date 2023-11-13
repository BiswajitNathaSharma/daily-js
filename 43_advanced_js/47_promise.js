let promiseOne = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve();
        console.log("promise done");
    }, 2000);
})
promiseOne.then(()=>{
    console.log("resolved");
})

new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("i love javaScript");
        console.log("promise call");
        resolve();
    }, 2000);
}).then(()=>{
    console.log("promise 2 done");
})


let promiseThree = new Promise(function(resolve, reject) {
  setTimeout(() => {
    console.log("hi");
    let userData = { username: "sharma", age: 22}
    resolve(userData)
  }, 1000);
})
promiseThree.then(function (user) {
    console.log(user);
})



// implementation of catch syntax
let promiseFour = new Promise((resolve, reject) => {
    setTimeout(() => {
        let error = true;
        if(!error){
            resolve("i am not error message")
        } else{
            reject("something went wrong")
        }
    }, 2000);
})
promiseFour.then((msg)=>{
    console.log(msg);
}).catch((msg)=>{
    console.log(msg);
})