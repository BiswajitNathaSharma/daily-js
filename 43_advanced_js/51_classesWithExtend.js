class user{
    constructor(username, age){
        this.username = username
        this.age = age
    }

    myAge(){
        return `age is just a number`
    }
}

class teacher extends user{
    constructor(username, age, course){
        super(username,age)
        this.course = course
    }
    mycourses(){
        return `my courses are js`
    }
}
let me = new teacher("sharma", 33, "js")
console.log(me.mycourses())