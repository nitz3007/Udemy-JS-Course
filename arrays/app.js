const number = [1,2,3];


// const number2 = new Array(3);
// console.log(number2);

// const number3 = Array(1,5,4);
// console.log(number3);

// const number4 = Array.of(1,3,4);
// const number4 = Array.from('Hi!');
// console.log(number4);

// number.push(4);
// number.unshift(7);
// number.pop();
// const num = number.shift();

// console.log(number, num);

// const months = ['jan', 'feb', 'mar', 'apr'];
// const removedElement = months.splice(0);

// console.log(months);
// console.log(removedElement);

// const prices = [23, 49.99, 175];
// const tax = 11.5;
// const taxAdjustedPrices=[];

// prices.forEach((price, idx, pricesArr)=> {
//     const priceObj = {index: idx, taxAdjustedPrice: (price * tax)}
//     taxAdjustedPrices.push(priceObj);
// });

// console.log(taxAdjustedPrices);

// const prices = [23, 49.99, 175];
// const tax = 11.5;

// const taxAdjustedPrices = prices.map((price, idx, pricesArr)=> {
//     const priceObj = {index: idx, taxAdjustedPrice: (price * tax)};
//     return priceObj;
// });

// console.log(prices, taxAdjustedPrices);

// const sortedPrice = prices.sort((a,b) => {
//     if(a>b) {
//         return 1;
//     } else if(a<b) {
//         return -1;
//     } else {
//         return 0;
//     }
// });

// console.log(prices);

const data = 'NewYork;2.99;2000';
const transformedData = data.split(';');
console.log(transformedData);

const nameFragments = ['Niharika', 'Thakur'];
const name1 = nameFragments.join();
const name2 = nameFragments.join(" ");
console.log(name1);
console.log(name2);
