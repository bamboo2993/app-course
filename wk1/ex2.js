//function statement
function greet(){
  console.log("how are you");
}

greet();


//functions are first class
function logGreeting(fn){
  fn();
}

logGreeting(greet);


//function expression
var greetMe =function(){
  console.log("hi,tom");
}

greetMe();


//its first class
logGreeting(greetMe);
