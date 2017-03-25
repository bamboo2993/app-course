var fruits = ['apple', 'banana', 'papaya'];

// for each
fruits.forEach(
    (fruits) => console.log(fruits)
);



//map
var numbers = [1,2,3,4,5];
var add5;

add5=numbers.map(
    (numbers) => numbers + 5
);

console.log(add5);


//spread operators

let state ={ a:1, b:2, c:3};

console.log(state);

//state = {...state, d:4};
//console.log(state);

//state = {...state, a:10};
//console.log(state);



//push

var num = [1,2,3];
num.push(6,3);

console.log(num);


console.log(num.slice(1,4));