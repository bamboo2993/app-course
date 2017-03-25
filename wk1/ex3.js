//Arrow Function Expression


//function expression
var greetMe = function(){
  console.log('hi, tom');
}

greetMe();


//Arrow function expression
greetSam = () => console.log("hi sam");
greetSam();

//Arrow function expression with parameters
greetYou =  name => console.log('hi ' + name + '!');
greetYou('NTUE');


add10 = num  => num + 10;
console.log(add10(4));



 var square1 = function(num){
   return num*num;
 }

 var square2 = num => {return num*num;}

 var square3 = num => num*num;

console.log(square3(2));



var add = (a,b) => a+b;
console.log(add(17,3));
