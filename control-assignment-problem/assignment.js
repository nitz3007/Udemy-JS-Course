const randomNumber = Math.random(); // produces random number between 0 (including) and 1 (excluding)
if(randomNumber > 0.7) {
    alert("Hey! I'm greater than 0.7");
}

const arr = [2, 4, 8, 16, 32];
for (let i=arr.length-1; i>=0 ; i--) {
    console.log(arr[i]);
}

for (const el of arr) {
    console.log(el);
}

const anotherRandomNumber = Math.random();

if (randomNumber > 0.7 && anotherRandomNumber >0.7) {
    alert('Hey! Looks like we both are greater than 0.7');
}
 
if(randomNumber >= 0.2 || anotherRandomNumber >= 0.2) {
    alert('Thank God! Atleast one of us is NOT less than 0.2');
}

console.log(randomNumber, "Random Number");
console.log(anotherRandomNumber, "Another Random Number");