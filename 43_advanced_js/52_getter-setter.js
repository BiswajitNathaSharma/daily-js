class user{
    constructor(username,email){
        this.username = username;
        this.email = email;
    }
    get username(){
        return `${this._username.toUpperCase()}`
    }
    set username(value){
        return this._username = value
    }
    get email(){
        return `${this._email.toUpperCase()}`
    }
    set email(value){
        return this._email = value
    }
}

const sharma = new user("biswajit", "biswajit@sharma.com")
console.log(sharma.username);
console.log(sharma.email);

//get is used when someone want to receive the value of a class, in this case we can hide the actual value to protect our data and send user a modified data. However seteer AKA set refers to the origional value that'll save in our database. 