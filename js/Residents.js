'use.strict';

class Person {
    constructor(fullname, age) {
        this.fullname = fullname;
        this.age = age;
    }
    getInfo() {
        console.log(`Person: ${this.fullname}`)
      
    }
}

