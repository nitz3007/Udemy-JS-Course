const userInputKeyname = 'level';

const person = {
    'first name': 'Ram',
    age: 27,
    hobbies: ['Reading', 'Running'],
    [userInputKeyname]: 'A3',
    greet: function() {
        alert('Hi there!');
    },
    5: 'hello',
};

person.isAdmin = true;
person.age = 30;
delete person.hobbies;

const dynamicKeyName = 'first name';

console.log(person[dynamicKeyName]);
console.log(person);

const userInputKeyName2 = 'height';
const obj = {
    5: 'hello',
    3: 'there',
};
obj[userInputKeyName2] = '5.7';

console.log(obj);