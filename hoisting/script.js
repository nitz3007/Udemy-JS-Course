//Hoisting is the behaviour of JS to move the declarations of functions, variables, classes and imports to the top of their scope, prior to the execution of code.
// console.log(x);
// console.log(getName);
// getName();
// var x = 5;
// function getName() {
//     console.log('Hello');
// }

// var getName = () => {
//     console.log('Hello')
// }

// var getName = function() {
//     console.log('Hello')
// }



let a =1;
{
    let a = 5;
    console.log(a)
}
console.log(a)


