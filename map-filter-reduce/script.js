const users = [
    {firstName: 'Niharika', lastName: 'Thakur', age: 27},
    {firstName: 'Akshay', lastName: 'Saini', age: 31},
    {firstName: 'Elon', lastName: 'Musk', age: 50},
    {firstName: 'Anna', lastName: 'James', age: 27},
]

//{27: 2, 30: 1, 50: 1}
// const output = users.reduce(function(acc, curr) {
//     if(acc && acc[curr.age]) {
//         acc[curr.age] = acc[curr.age] + 1
//     } else {
//         acc[curr.age] = 1;
//     }
//     return acc;
// }, {})

//first name of users whith age less than 30
// const output = users.filter(x => x.age < 30).map(y => y.firstName);
const output = users.reduce((acc, curr) => {
    if(curr.age < 30) {
        acc.push(curr.firstName);
    }
    return acc;
},[])

console.log(output);