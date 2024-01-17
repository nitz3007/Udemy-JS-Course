// function counter() {
//     let count = 0;
//     return function incrementCounter() {
//         count++;
//         console.log(count);
//     }
// }

// const counter1 = counter();
// counter1();
// counter1();

// const counter2 = counter();
// counter2();

//Make the above code scalable by making it a constructor function
function Counter() {
    let count = 0;
    this.incrementCounter = function() {
        count++;
        console.log(count);
    }
    this.decrementCounter = function() {
        count--;
        console.log(count);
    }
}

const counter = new Counter();
counter.incrementCounter();
counter.decrementCounter();

// using class 
// class Counter {
//     constructor() {
//         this.count = 0;
//     }
     
//     incrementCounter = function() {
//         this.count++;
//         console.log(this.count);
//     }
//     decrementCounter = function() {
//         this.count--;
//         console.log(this.count);
//     }
// }