// class AgedPerson {
//     printAge() {
//         console.log(this.age);
//     }
// }

// class Person extends AgedPerson{
//     name = 'Max';
    
//     constructor() {
//         super();
//         this.age = 30;
//     }

//     greet() {
//         console.log(`My name is ${this.name} and I'm ${this.age} years old`);
//     }

// }

// const p2 = new Person;
// console.log(p2);


// function Person() {
//     this.name = 'Max';
//     this.age = 30;
//     this.greet = function() {
//         console.log(`My name is ${this.name} and I'm ${this.age} years old`);
//     }
// }

// Person.prototype.showAge = function() {
//         console.log(this.age);
//     }

// console.dir(Person);

// const p = new Person();
// p.greet();
// p.showAge();
// console.log(p);
// console.log(p.__proto__ === Person.prototype);

/* 
'Object' is the base object where every object created using object literal or any functin falls back to. 
In prototype chain, any object will have all the properties of Object.prototype and it'll be the end of the chain.
The __proto__ of Object.prototype is null.
*/
// console.dir(Object.prototype);
// console.dir(Object.prototype.__proto__);


//How to set prototye for an object that has already been created
// const course = {
//     title: 'Javascript - The Complete Guide',
//     rating: 5
// }

// Object.setPrototypeOf(course, {
//     ...Object.getPrototypeOf(course),
//     printRating: function() {
//         console.log(`${this.rating}/5`);
//     }
// })

// console.log(Object.getPrototypeOf(course));
// course.printRating();

//Changing prototype of an object while creating the object
//SYNTAX: Object.create(<prototype Object>, {<property descriptor>})
const student = Object.create({
    printProgress: function() {
        console.log(this.progress)
    }
},{
    name: {
        configurable: true,
        enumerable: true,
        value: 'Max',
        writable: true
    }
});

student.age = 27;

Object.defineProperty(student, 'progress', {
    configurable: true,
    enumerable: true,
    value: 0.8,
    writable: false
})

student.printProgress();
student.progress = 10;
console.log(student);