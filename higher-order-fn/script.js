const radius = [3,1,2,4]

const area = (radius) => {
    return Math.PI * radius * radius
}

const circumference = (radius) => {
    return 2 * Math.PI * radius;
}


//Here calculate is a Higher Order Function
//calculate works like the map method
Array.prototype.calculate = function(logic) {
    const output = []
    for(let i=0; i<this.length; i++) {
        output.push(logic(this[i]))
    }
    return output;
}

// console.log(calculate(radius, area));
// console.log(calculate(radius, circumference));
console.log(radius.calculate(area));