// callback

function add(callback) {
    console.log('hi!');
    var number = 5;

    callback(number);
    console.log(`number now is ${number}`)
}



add( number =>{
    console.log(`the callback was invoked!`);
    console.log(number * 2);
});