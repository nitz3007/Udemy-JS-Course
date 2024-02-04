// const p1 = new Promise((resolve, reject)=> {
//     setTimeout(()=>{
//         resolve('p1 resolved');
//     },10000);
// });

// const p2 = new Promise((resolve, reject)=> {
//     setTimeout(()=>{
//         resolve('p2 resolved');
//     },5000);
// });

// async function handlePromise() {
//     const val1 = await p1;
//     console.log(val1);
//     console.log('Namaste JS 1');

//     const val2 = await p2;
//     console.log(val2);
//     console.log('Namaste JS 2')
// }

// handlePromise();


//Real world use of async-await in fetch calls

const API_URL = 'https://api.github.com/users/nitz3007';
async function getUser() {
    try {
        const response = await fetch(API_URL);
        const jsonVal = await response.json();
        console.log(jsonVal);
    } catch (err) {
        console.log(err);
    }
}

getUser();