class User {
    constructor(username, age, gmail){
        this.username = username;
        this.age = age;
        this.gmail = gmail;
    }

    nameToUppercase(){
        return this.username.toUpperCase();
    }

    dayRemaining(){
        return 60-this.age;
    }
}

let sharma = new User("sharma", 20, "sharma@gmail.com");
console.log(`after uppercase ${sharma.nameToUppercase()}`);
console.log(`year remaining to live ${sharma.dayRemaining()}`);