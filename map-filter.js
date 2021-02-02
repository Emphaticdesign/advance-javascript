const number = [5, 2, 10, 6, 7, ];

// const output = [];
// for(let i = 0; i < number.length; i++){
//     const element = number[i];
//     const result = element*element;
//     output.push(result);
// }

// function square(element) {
//     return element*element;
// }
// const square = element => element*element;
// const square = x => x * x;

// const result = number.map(function(element, index, array) {
//     return element*element
// });

// const result = number.map(x => x * x);

// console.log(result);


const bigger = number.filter(x => x < 3);

const isThare = number.find(x => x > 5);
console.log(isThare);