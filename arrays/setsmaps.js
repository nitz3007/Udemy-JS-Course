// const ids = new Set(['Hi', 'you', 'there', 'there']);
// ids.add(4);
// console.log(ids);
// for(const entry of ids.values()) {
//     console.log(entry);
// }

// const person1 = {name: 'Max'};
// const person2 = {name: 'Manuel'};

// const personData = new Map([['key', 'value']]);
// const personData = new Map([[person1, [{date:'yesterday', price: 200}]]]);
// personData.set(person2, [{date: '2 weeks ago', price:100}]);
// console.log(personData);
// console.log(personData.get(person1));

// for(const [key, value] of personData.entries()) {
//     console.log(key, value);
// }

// for(const key of personData.keys()) {
//     console.log(key);
// }

// for(const value of personData.values()) {
//     console.log(value);
// }
// personData.forEach(element => {
//     console.log(element);
// });

let person = {name: 'Max'};
const persons = new WeakSet();
persons.add(person);

//some operations...
// person = null;
//the person object is now released for garbage collection and would be removed from the Weakset by JS in some time
console.log(persons);

const personData = new WeakMap();
personData.set(person, 'Extra Info');
//some operations...
person = null;
console.log(personData);