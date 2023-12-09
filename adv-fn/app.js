//pure function - A function which gives same output for same arguments everytime it is executed and has no side effects.
function add(num1, num2) {
    return num1 +num2;
}

//impure functions - A function which gives different output for the same argument on each execution 
//or it does some side effect ie. it changes something outside of the function.
function addrandom(num) {
    return num + Math.random();
}

let prevRes = 0;
function addAgain(num1, num2) {
    const sum = num1 + num2;
    preRes= sum;
    return sum;
}

//Factory Functions - A function which produces another function.
function createTaxCalculator(tax) {
    function calculateTaxAmount(amount) {
        return tax * amount;
    }
    return calculateTaxAmount;
}

const calculateVatAmount = createTaxCalculator(0.19);
const calculateIncomeTaxAmount = createTaxCalculator(0.25);

console.log(calculateVatAmount(100));
console.log(calculateIncomeTaxAmount(200));

function makeFn() {
    let name='Max';
    function displayName() {
        console.log('Hello' + name);
    }
    name= 'Mini';
    return displayName;
}

const myFunc = makeFn();
console.log(myFunc());

// function powerOf(x,n) {
//     let result = 1;
//     for(let i=0; i<n; i++) {
//         result *= x;
//     }
//     return result;
// }

//Recursion approach:
function powerOf(x,n) {
    if(n===1){
        return x;
    }
    return x * powerOf(x, n-1);
}
console.log(powerOf(2,3));

//Advanced Recursion:
const myself = {
    name: 'Max',
    friends: [
        {
            name: 'Robert',
            friends: [
                {
                    name: 'Cally',
                },
                {
                    name: 'Susan',
                }
            ]
        },
        {
            name: 'Charles',
        }
    ]
}   


function getFriendNames(person) {
    const collectedFriends = [];

    if(!person.friends) {
        return [];
    }
    
    for(const friend of person.friends) {
        collectedFriends.push(friend.name);
        collectedFriends.push(...getFriendNames(friend));
    }
    return collectedFriends;
} 

console.log(getFriendNames(myself));