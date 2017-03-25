//練習Scope Chain範例，以及觀察變數提升的效果


//Scope
function b1(){
  var num;
  console.log(num); // 2
}

function a1(){
  var num = 1;
  b1();
  console.log(num); // 1
}


var num = 2;
console.log(num); //2
a1();



function a2(){
  var num = 1;
  function b2(){
//  var num;
  console.log(num); //1
}

  b2();
  console.log(num); //1
}


var num = 2;
console.log(num); //2
a2();




//變數提升的效果
var firstname = 'Tomas';
var addsurname = () => {
  var surname = 'Tan';
  var fullname = firstname + ' ' + surname;
  console.log(fullname);
} // output: Tomas Tan

var addsurname = () => {
  var surname = 'Tan';
  var fullname = firstname + ' ' + surname;
  var firstname = 'Alice';
  console.log(fullname);
} // output: undefined Tan
