'use.strict';

class Apartment {
    constructor(number, roomsAmount, people) {
        this.number = number;
        this.roomsAmount = roomsAmount;
        //this.people = new Set(people);
        this.people = Apartment.generateSet(people);
      
    }

    static generateSet(people) {
        const peopleSet = new Set();
        //console.log(people)
        people.forEach(person => peopleSet.add(person))
     
            return peopleSet;
    }

    getInfo() {
        console.log(`Apartments # ${this.number}, Rooms: ${this.roomsAmount}`);
        console.log("Residents:");
        this.people.forEach(person => person.getInfo());
        

        
    }
}