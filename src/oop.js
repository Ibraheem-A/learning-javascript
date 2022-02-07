function Person(firstName, lastName, dob){
    this.firstName = firstName
    this.lastName = lastName
    this.dob = new Date(dob)

    this.getBirthYear = function () {return this.dob.getFullYear();}
    this.getFullName = function () {return `${this.firstName} ${this.lastName}`;}
}

// Instantiate object
const person1 = new Person('John', 'Doe', '1-1-1981');

console.log(person1)
console.log(person1.dob);
console.log(person1.dob.getDay());

console.log(person1.getBirthYear());
console.log(person1.getFullName());


/*
    Better way to do it using prototypes because you might not need the methods for all objects
*/

function Persona(firstName, lastName, dob){
    this.firstName = firstName
    this.lastName = lastName
    this.dob = new Date(dob)
}

Persona.prototype.getBirthYear = function () {return this.dob.getFullYear();}
Persona.prototype.getFullName = function () {return `${this.firstName} ${this.lastName}`;}

const person2 = new Persona('Mary', 'Smith', '10-12-1990')

console.log(person2.getFullName())


/*
    From ES 6 {ES6 Classes with syntatic sugar - just makes it prettier}

*/

class Personate{
    constructor(firstName, lastName, dob){
        this.firstName = firstName;
        this.lastName = lastName;
        this.dob = new Date(dob);
    }

    getBirthYear() {
        return this.dob.getFullYear();
    }

    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }
}

const person3 = new Personate('James', 'John', '20-2-1985')
console.log(person3);