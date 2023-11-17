let createUser =function (username, price) {
    this.username = username
    this.price = price
}
createUser.prototype.printMe = function(){
    console.log(`Price is ${this.price}`);
}
const chai = new createUser("chai", 50)

chai.printMe()
