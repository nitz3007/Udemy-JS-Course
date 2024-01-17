// function x() {
//     var i = 1;
//     setTimeout(function() {
//         console.log(i)
//     }, 1000);
//     console.log('Namaste JS');
// }

// x();

//print count from 1 to 5 in console, each after 1 second delay:
// function x() {
//     for(let i=1; i<=5; i++) {
//         setTimeout(function() {
//             console.log(i);
//         }, i*1000);
//     }
// }
// x();

function x() {
    for(var i=1; i<=5; i++) {
        function y(count) {
            setTimeout(function() {
                console.log(count)
            }, count * 1000);
        }
        y(i);
    }
}

x();

