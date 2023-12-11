// generate a random number between min and max
function randomInBetween(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

console.log(randomInBetween(1,10));

// Tagged Template
function productDescription(strings, productName, productPrice) {
    console.log(strings);
    console.log(productName);
    console.log(productPrice);
    let priceCategory = 'cheap';
    if(productPrice > 20) {
        priceCategory = 'fairly priced'
    }
    return `${strings[0]}${productName}${strings[1]}${priceCategory}${strings[2]}`;
}

const prodName = 'Chair';
const prodPrice = 49.99;

const productOutput = productDescription`This product (${prodName}) is ${prodPrice}.`
console.log(productOutput);

//Regular Expression to check valid email
const regex = /^\S+@\S+\.\S+$/
console.log(regex.test('test@gmail.com'));
console.log(regex.test('test.ail@com'));
