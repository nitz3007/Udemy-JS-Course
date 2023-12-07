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