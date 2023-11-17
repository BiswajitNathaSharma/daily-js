let myNmae = "sharma        "
// console.log(myNmae.length);

String.prototype.truelength = function(){
    console.log(`${this}`);
    console.log(`${this.trim().length}`);
}

myNmae.truelength()